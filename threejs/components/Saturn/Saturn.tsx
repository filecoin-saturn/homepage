
import { useMemo, useRef } from 'react'
import { AdditiveBlending, Euler, Group, Vector3 } from 'three'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { AdaptiveDpr, Points } from '@react-three/drei'
import GeometryFactory from '../../Utils/GeometryFactory'
import { saturnStartPosition } from '../../animations/springs'
import lightDotVertexShader from '../../shaders/light-dot/vertex.glsl'
import lightDotFragmentShader from '../../shaders/light-dot/fragment.glsl'

function WithinCanvas() {
    const { size } = useThree()
    const saturnStartP = saturnStartPosition(size)
    const saturn = useRef<Group>(null)
    const geometryFactory = useMemo(() => new GeometryFactory(), [])
    const [globePos, globeCol, globeSiz] = useMemo(() => {
        return geometryFactory.hollowSphere(10000, 0.2, 1, 3, 1, 0.5, 1)
    }, [])
    const [ringPos, ringCol, ringSiz] = useMemo(() => {
        return geometryFactory.ring(8000, 4, 1, 5, 1, 0.5, 1, 0.1)
    }, [])

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        if(saturn && saturn.current) saturn.current.rotateOnAxis(new Vector3(0,0,1).normalize(), 0.001)
    });

    const saturnScale = useMemo(() => {
        const scale = size.width > 1100 ? 1 : 0.7
        return new Vector3(scale,scale,scale)
    }, [size])

    const saturnRotation = useMemo(() => {
        const x = size.width > 1000 ? -Math.PI / 11 * 4 : -Math.PI / 11 * 2
        const y = size.width > 1000 ? -Math.PI / 9 : -Math.PI / 9
        const z = 0
        return new Euler(x, y, z)
    }, [size])

    const lightDotSize = useMemo(() => {
        return size.width > 1000 ? 1.3 : 1.0
    }, [size])

    return (
        <>
            <group 
                ref={saturn} 
                position={[saturnStartP.x, saturnStartP.y, saturnStartP.z]}
                rotation={saturnRotation}
                scale={saturnScale}
            >
                <Points
                    positions={globePos}
                    sizes={globeSiz}
                    colors={globeCol}
                >
                    <shaderMaterial
                        uniforms={{
                            uSizeFactor: {value: lightDotSize}
                        }}
                        vertexShader={lightDotVertexShader}
                        fragmentShader={lightDotFragmentShader} 
                        depthWrite={false}
                        blending={AdditiveBlending}
                        transparent={true}
                    />
                </Points>
                <Points
                    positions={ringPos}
                    sizes={ringSiz}
                    colors={ringCol}
                >
                    <shaderMaterial
                        uniforms={{
                            uSizeFactor: {value: lightDotSize}
                        }}
                        vertexShader={lightDotVertexShader}
                        fragmentShader={lightDotFragmentShader} 
                        depthWrite={false}
                        blending={AdditiveBlending}
                        transparent={true}
                    />
                </Points>
            </group>
        </>
    )
}

export default function Saturn() {
    return (
        <Canvas camera={{position: [0,0,15], fov:30}}>
            <WithinCanvas />
            <AdaptiveDpr />
        </Canvas>
    )
}