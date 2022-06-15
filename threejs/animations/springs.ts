import { Camera } from "@react-three/fiber"
import { RefObject } from "react"
import { Group, Vector3 } from "three"

export function saturnStartPosition(size: {width: number, height:number}) {
    const x = 3.6 * (size.width / size.height)
    const maxYY = 5
    const minYY = 3.1
    const maxYX = 300
    const minYX = 1200
    const y = (minYY - maxYY) / (minYX - maxYX) * size.width + maxYY - maxYX * (minYY - maxYY) / (minYX - maxYX)
    return {x:x, y:y, z:0}
}

export function cameraDisplacementSpring(camera: Camera) {
    return {
        x: 0,
        y: 0,
        onChange: ({value}: {value: {x:number, y:number}}) => {
            camera.position.setX(value.x)
            camera.position.setY(value.y)
        }
    }
}

export function objectPositionSpring({object, size}: {object: RefObject<Group>, size: {width: number, height:number}}) {
    const start = saturnStartPosition(size)
    return {
        x: start.x,
        y: start.y,
        z: start.z,
        onChange: ({value}: {value: {x:number, y:number, z:number}}) => {
            object?.current?.position.set(value.x, value.y, value.z)
        },
        config: {
            tension: 800,
            friction: 40
        }
    }
}