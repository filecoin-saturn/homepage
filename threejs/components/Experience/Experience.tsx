
import { useMemo, useRef } from 'react'
import { AdditiveBlending, Euler, Group, Vector3 } from 'three'
import {useSpring} from 'react-spring'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import {useMove} from '@use-gesture/react'
import { AdaptiveDpr, Points } from '@react-three/drei'
import GeometryFactory from '../../Utils/GeometryFactory'
import { cameraDisplacementSpring, objectPositionSpring, saturnStartPosition } from '../../animations/springs'
import lightDotVertexShader from '../../shaders/light-dot/vertex.glsl'
import lightDotFragmentShader from '../../shaders/light-dot/fragment.glsl'
import IntersectionObserverWrapper from '../../../components/IntersectionObserverWrapper/IntersectionObserverWrapper'

function WithinCanvas() {
    const { camera, size } = useThree()
    const saturnStartP = saturnStartPosition(size)
    const saturn = useRef<Group>(null)
    const geometryFactory = useMemo(() => new GeometryFactory(), [])
    const [globePos, globeCol, globeSiz] = useMemo(() => {
        return geometryFactory.hollowSphere(10000, 0.2, 1, 3, 1, 0.5, 1)
    }, [])
    const [ringPos, ringCol, ringSiz] = useMemo(() => {
        return geometryFactory.ring(8000, 4, 1, 5, 1, 0.5, 1, 0.1)
    }, [])
    const [netPos1, netCol1, netSiz1] = useMemo(() => {
        return geometryFactory.hollowSphere(150, 0.1, 1, 0.3, 1, 0.5, 1)
    }, [])
    const [netPos2, netCol2, netSiz2] = useMemo(() => {
        return geometryFactory.hollowSphere(400, 0.3, 1, 0.6, 1, 0.5, 1)
    }, [])
    const [netPos3, netCol3, netSiz3] = useMemo(() => {
        return geometryFactory.hollowSphere(400, 0.1, 1, 0.4, 1, 0.5, 1)
    }, [])
    const [netPos4, netCol4, netSiz4] = useMemo(() => {
        return geometryFactory.hollowSphere(600, 1, 1, 2, 1, 0.5, 1)
    }, [])

    useMove((state) => {
        const scale = 2
        const offsetX = -scale * (state.xy[0] / document.documentElement.clientWidth - 0.5)
        const offsetY = scale * (state.xy[1] / document.documentElement.clientHeight - 0.5)
        cameraDisplacementApi.start({x: offsetX, y: offsetY})
    }, {target: window})

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

    const [cameraDisplacement, cameraDisplacementApi] = useSpring(() => cameraDisplacementSpring(camera))
    const [saturnPosition, saturnPositionApi] = useSpring(() => objectPositionSpring({object: saturn, size:size}))

    return (
        <>
            <IntersectionObserverWrapper 
                targetCallbacks={new Map([["track-saturn", (entry) => {
                    const scaleX = 12
                    const scaleY = 10
                    const ratio = (entry.intersectionRatio - 1) * -1
                    saturnPositionApi.start({x: saturnStartP.x + ratio * scaleX, y: saturnStartP.y + ratio * scaleY, z: saturnStartP.z})
                }]])}
                threshold={Array.from({length: 100}, (_, i) => i + 1).map(i => i / 100)}
            />
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
            {/*
            <group
                position={[-3.5, 0, 0]}
            >
                <Points
                    positions={netPos2}
                    sizes={netSiz2}
                    colors={netCol2}
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
                    positions={netPos1}
                    sizes={netSiz1}
                    colors={netCol1}
                    position={[-2, -1, 0]}
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
                    positions={netPos3}
                    sizes={netSiz3}
                    colors={netCol3}
                    position={[-0.5, -1.8, 2]}
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
            */}
        </>
    )
}

export default function Experience() {
    return (
        <Canvas camera={{position: [0,0,15], fov:30}}>
            <WithinCanvas />
            <AdaptiveDpr />
        </Canvas>
    )
}