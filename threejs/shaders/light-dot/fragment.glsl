void main()
{
    float strength = distance(gl_PointCoord, vec2(0.5));
    float border = 0.49;
    float radius = 0.5;
    float dist = radius - strength;
    float t = smoothstep(0.2, border, dist);
    gl_FragColor = vec4(0.7, 0.8, 1.0, t);
}