import { Color, Vector3, Spherical } from "three";

export default class GeometryFactory {

    genStar(r:number) {
        return new Vector3().setFromSpherical(new Spherical(r, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI));
    }

    genRingStar(r:number, h:number) {
        const angle = Math.random() * 2 * Math.PI
        const x = Math.cos(angle) * r
        const y = Math.sin(angle) * r
        return new Vector3(x,y,h)
    }

    hollowSphere(count:number, depth:number, factor:number, radius:number, saturation:number, hue:number, lightness:number) {
        const positions = [];
        const colors = [];
        const sizes = Array.from({
            length: count
        }, () => (0.5 + 0.5 * Math.random()) * factor);
        const color = new Color();
        const r = radius + depth;
        const increment = depth / count;
    
        for (let i = 0; i < count; i++) {
            const pRadius = r - increment * (i - 1) - increment * Math.random()
            positions.push(...this.genStar(pRadius).toArray());
            color.setHSL(hue, saturation, lightness);
            colors.push(color.r, color.g, color.b);
        }
    
        return [new Float32Array(positions), new Float32Array(colors), new Float32Array(sizes)];
    }

    ring(count:number, depth:number, factor:number, radius:number, saturation:number, hue:number, lightness:number, height:number) {
        const positions = []
        const colors = []
        const sizes = Array.from({
            length: count
        }, () => (0.5 + 0.5 * Math.random()) * factor);
        const color = new Color();
        const r = radius + depth;
        const increment = depth / count;
        const h = (Math.random() - 0.5) * height
 
        for (let i = 0; i < count; i++) {
            const pRadius = r - increment * (i - 1) - increment * Math.random()
            positions.push(...this.genRingStar(pRadius, h).toArray());
            color.setHSL(hue, saturation, lightness);
            colors.push(color.r, color.g, color.b);
        }

        return [new Float32Array(positions), new Float32Array(colors), new Float32Array(sizes)];
    }
}