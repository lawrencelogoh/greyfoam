export function Pillow(props) {
  return (
    <mesh castShadow receiveShadow {...props}>
      <boxGeometry args={[1.2, 0.5, 0.8]} />
      <meshStandardMaterial color="#94a3b8" roughness={0.85} metalness={0} />
    </mesh>
  )
}
