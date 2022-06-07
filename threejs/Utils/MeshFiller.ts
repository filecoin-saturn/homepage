import { MeshBVH, acceleratedRaycast } from 'three-mesh-bvh';
import * as THREE from 'three'

THREE.Mesh.prototype.raycast = acceleratedRaycast;

export default class MeshFiller {
	particleRadius: number;
	scene: THREE.Scene

    constructor(particleRadius: number) {
        this.particleRadius = particleRadius;
        this.scene = new THREE.Scene()
    }

    // taken from https://codesandbox.io/s/great-http-xykxn?file=/src/index.js:11832-13741
    // returns a geometry with the #count calculated positions as vertices
    fillWithPoints(geom: THREE.BufferGeometry, count: number) {
        const material = new THREE.MeshBasicMaterial()
        material.side = THREE.DoubleSide
        const mesh = new THREE.Mesh(geom, material)
        mesh.geometry.computeVertexNormals();
        mesh.geometry.center();
        mesh.geometry.boundsTree = new MeshBVH( geom );
        // add temporary mesh to scene
        this.scene.add(mesh)

        var ray = new THREE.Raycaster();
        ray.firstHitOnly = false;
      
        let meshInvMatrix = new THREE.Matrix4();
        meshInvMatrix.copy(mesh.matrixWorld).invert();
        let localRay = new THREE.Ray();
      
        mesh.geometry.computeBoundingBox();
        let bbox = mesh.geometry.boundingBox;
        let center = new THREE.Vector3();
        bbox?.getCenter(center);
        let bsize = new THREE.Vector3();
        bbox?.getSize(bsize);
      
        let points = [];
        let pointsStart = [];
        let pointsDelay = []; //[0..1]
      
        var dir = new THREE.Vector3();
        var v = new THREE.Vector3();
        var vps = new THREE.Vector3();
        let intersects = [];
        let counter = 0;
        while (counter < count) {
			dir.random().normalize();
			if(bbox) {
				v.set(
					THREE.MathUtils.randFloat(bbox.min.x, bbox.max.x),
					THREE.MathUtils.randFloat(bbox.min.y, bbox.max.y),
					THREE.MathUtils.randFloat(bbox.min.z, bbox.max.z)
				);
				if (isInside(v)) {
					vps.setFromSphericalCoords(
                            Math.random() * this.particleRadius,
                            Math.random() * Math.PI,
                            Math.random() * Math.PI * 2
						).setY(bbox.min.y);
					pointsStart.push(vps.x, vps.y, vps.z);
					pointsDelay.push((v.y - bbox.min.y) / bsize.y);
				
					points.push(v.clone());
					counter++;
				}
			}
        }
      
        function isInside(v: THREE.Vector3) {
			ray.set(v, dir);
			intersects = [];
			intersects = ray.intersectObjects([mesh]);
		
			localRay.copy(ray.ray).applyMatrix4(meshInvMatrix);
		
			if (intersects.length > 0) {
				const dotProd = intersects[0].face?.normal.dot(localRay.direction)
				if (dotProd && dotProd > 0) return true;
			}
			return false;
        }
      
        let rg = new THREE.BufferGeometry().setFromPoints(points);
        rg.setAttribute(
			"positionStart",
			new THREE.Float32BufferAttribute(pointsStart, 3)
        );
        rg.setAttribute(
			"positionDelay",
			new THREE.Float32BufferAttribute(pointsDelay, 1)
        );
        this.scene.remove(mesh)
        return rg;
      }
}