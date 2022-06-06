
import { useCallback, useMemo, useRef } from 'react'
import { AdditiveBlending } from 'three'
import {useSpring} from 'react-spring'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import {MoveGesture} from '@use-gesture/vanilla'
import { AdaptiveDpr, Points } from '@react-three/drei'
import GeometryFactory from '../../Utils/GeometryFactory'

function WithinCanvas() {
    const { invalidate, camera, gl } = useThree()
    const geometryFactory = useMemo(() => new GeometryFactory(), [])
    const [globePos, globeCol, globeSiz] = useMemo(() => {
        return geometryFactory.hollowSphere(10000, 0.2, 1, 3, 1, 0.5, 1)
    }, [])
    const [ringPos, ringCol, ringSiz] = useMemo(() => {
        return geometryFactory.ring(8000, 4, 1, 5, 1, 0.5, 1, 0.1)
    }, [])

    const cameraDisplacementSpring = useCallback(() => ({
        x: 0,
        y: 0,
        onChange: ({value}: {value: {x:number, y:number}}) => {
            camera.position.setX(value.x)
            camera.position.setY(value.y)
            invalidate()
        }
    }), [])
    const moveGestureMemo = useMemo(() => {
        return new MoveGesture(window, (state) => {
            const scale = 2
            const offsetX = -scale * (state.xy[0] / document.documentElement.clientWidth - 0.5)
            const offsetY = scale * (state.xy[1] / document.documentElement.clientHeight - 0.5)
            cameraDisplacementApi.start({x: offsetX, y: offsetY})
        })
    }, [])

    const [cameraDisplacement, cameraDisplacementApi] = useSpring(cameraDisplacementSpring)

    return (
        <>
            <Points
                positions={globePos}
                sizes={globeSiz}
                colors={globeCol}
                position={[7,2,0]}
            >
                <shaderMaterial
                    vertexShader={`
                        void main()
                        {
                            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
                            vec4 viewPosition = viewMatrix * modelPosition;
                            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                            gl_PointSize = (200.0 / - mvPosition.z );
                            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
                        }
                    `}
                    fragmentShader={`
                        void main()
                        {
                            float strength = distance(gl_PointCoord, vec2(0.5));
                            float border = 0.49;
                            float radius = 0.5;
                            float dist = radius - strength;
                            float t = smoothstep(0.2, border, dist);
                            gl_FragColor = vec4(0.7, 0.8, 1.0, t);
                        }
                    `} 
                    depthWrite={false}
                    blending={AdditiveBlending}
                    transparent={true}
                />
            </Points>
            <Points
                positions={ringPos}
                sizes={ringSiz}
                colors={ringCol}
                position={[7,2,0]}
                rotation={[-Math.PI / 11 * 4,-Math.PI / 9,0]}
            >
                <shaderMaterial
                    vertexShader={`
                        void main()
                        {
                            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
                            vec4 viewPosition = viewMatrix * modelPosition;
                            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                            gl_PointSize = (200.0 / - mvPosition.z );
                            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
                        }
                    `}
                    fragmentShader={`
                        void main()
                        {
                            float strength = distance(gl_PointCoord, vec2(0.5));
                            float border = 0.49;
                            float radius = 0.5;
                            float dist = radius - strength;
                            float t = smoothstep(0.2, border, dist);
                            gl_FragColor = vec4(0.7, 0.8, 1.0, t);
                        }
                    `} 
                    depthWrite={false}
                    blending={AdditiveBlending}
                    transparent={true}
                />
            </Points>
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