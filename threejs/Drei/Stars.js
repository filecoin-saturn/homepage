import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, Vector3, Spherical, AdditiveBlending, ShaderMaterial } from 'three';

class StarfieldMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: {
          value: 0.0
        },
        fade: {
          value: 1.0
        }
      },
      vertexShader:
      /* glsl */
      `
      uniform float time;
      attribute float size;
      attribute vec3 backColor;
      attribute vec3 frontColor;
      varying vec3 vBackColor;
      varying vec3 vFrontColor;
      void main() {
        vBackColor = backColor;
        vFrontColor = frontColor;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(mvPosition.x + 2.0 * time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,
      fragmentShader:
      /* glsl */
      `
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vFrontColor;
      varying vec3 vBackColor;
      void main() {
        float opacity = 1.0;
        float d = distance(gl_PointCoord, vec2(0.5, 0.5));
        if (fade == 1.0) {
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        vec3 mixColor = mix(vFrontColor, vBackColor, d * 2.0);
        gl_FragColor = vec4(mixColor, opacity);

        #include <tonemapping_fragment>
	      #include <encodings_fragment>
      }`
    });
  }

}

const genStar = r => {
  return new Vector3().setFromSpherical(new Spherical(r, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI));
};

const Stars = /*#__PURE__*/React.forwardRef(({
  radius = 100,
  depth = 50,
  count = 5000,
  saturation = 0,
  hueLow = 0,
  hueHigh = 1,
  factor = 4,
  fade = false,
  speed = 1
}, ref) => {
  const material = React.useRef();
  const [position, backColor, frontColor, size] = React.useMemo(() => {
    const positions = [];
    const colors = [];
    const backColors = []
    const frontColors = []
    const sizes = Array.from({
      length: count
    }, () => (0.5 + 0.5 * Math.random()) * factor);
    const color = new Color();
    const backColor = new Color()
    const frontColor = new Color()
    let r = radius + depth;
    const increment = depth / count;

    for (let i = 0; i < count; i++) {
      r -= increment * Math.random();
      positions.push(...genStar(r).toArray());
      // hue will be picked randomly between hue low and hue high
      const hue = hueLow && hueHigh ? hueLow + (i / count) * (hueHigh - hueLow) : i / count
      const backValue = 0.1
      const frontValue = Math.random()*(0.7-backValue) + backValue
      color.setHSL(hue, saturation, 0.9);
      backColor.setHSL(hue, saturation, backValue)
      frontColor.setHSL(hue, saturation, frontValue)
      colors.push(color.r, color.g, color.b);
      backColors.push(backColor.r, backColor.g, backColor.b);
      frontColors.push(frontColor.r, frontColor.g, frontColor.b)
    }

    return [new Float32Array(positions), new Float32Array(backColors), new Float32Array(frontColors), new Float32Array(sizes)];
  }, [count, depth, factor, radius, saturation, hueLow, hueHigh]);
  useFrame(state => material.current && (material.current.uniforms.time.value = state.clock.getElapsedTime() * speed));
  const [starfieldMaterial] = React.useState(() => new StarfieldMaterial());
  return /*#__PURE__*/React.createElement("points", {
    ref: ref
  }, /*#__PURE__*/React.createElement("bufferGeometry", null, /*#__PURE__*/React.createElement("bufferAttribute", {
    attach: "attributes-position",
    args: [position, 3]
  }), /*#__PURE__*/React.createElement("bufferAttribute", {
    attach: "attributes-backColor",
    args: [backColor, 3]
  }), /*#__PURE__*/React.createElement("bufferAttribute", {
    attach: "attributes-frontColor",
    args: [frontColor, 3]
  }), /*#__PURE__*/React.createElement("bufferAttribute", {
    attach: "attributes-size",
    args: [size, 1]
  })), /*#__PURE__*/React.createElement("primitive", {
    ref: material,
    object: starfieldMaterial,
    attach: "material",
    blending: AdditiveBlending,
    "uniforms-fade-value": fade,
    transparent: true,
    vertexColors: true
  }));
});

export { Stars };
