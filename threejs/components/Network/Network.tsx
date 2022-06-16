import { Canvas, useThree } from "@react-three/fiber"
import { AdaptiveDpr, Points } from '@react-three/drei'
import { useMemo } from "react"
import MeshFiller from "../../Utils/MeshFiller"
import { AdditiveBlending, CylinderBufferGeometry, Euler } from "three"
import lightDotVertexShader from '../../shaders/light-dot/vertex.glsl'
import lightDotFragmentShader from '../../shaders/light-dot/fragment.glsl'
import { networkStartPosition } from "../../animations/springs"

function WithinCanvas() {
    const { size } = useThree()
    const networkStartP = networkStartPosition(size)
    const meshFiller = useMemo(() => new MeshFiller(10), [])
    const l1Positions1 = useMemo(() => meshFiller.fillWithPoints(new CylinderBufferGeometry(2.2, 2.2, 0.1, 15), 800), [meshFiller])
    const l1Positions2 = useMemo(() => meshFiller.fillWithPoints(new CylinderBufferGeometry(1.5, 1.5, 0.1, 15), 400), [meshFiller])
    const l1Positions3 = useMemo(() => meshFiller.fillWithPoints(new CylinderBufferGeometry(0.8, 0.8, 0.1, 15), 120), [meshFiller])

    const lightDotSize = useMemo(() => {
        return size.width > 1000 ? 1.4 : 1.15
    }, [size])

    const networkRotation = useMemo(() => {
        const x = Math.PI / 3
        const y = 0
        const z = Math.PI / 3.3
        return new Euler(x, y, z)
    }, [size])

    return (
        <group
            position={[networkStartP.x, networkStartP.y, networkStartP.z]}
            rotation={networkRotation}
        >
            <Points 
                positions={l1Positions1}
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
                positions={l1Positions2}
                position={[0,2,0]}
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
                positions={l1Positions3}
                position={[0,3.2,0]}
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
    )
}

export default function Network() {
    return (
        <Canvas camera={{position: [0,0,15], fov:30}}>
            <WithinCanvas />
            <AdaptiveDpr />
        </Canvas>
    )
}