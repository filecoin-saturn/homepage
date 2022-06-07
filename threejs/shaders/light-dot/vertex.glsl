uniform float uSizeFactor;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = (200.0 * uSizeFactor / - mvPosition.z );
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}