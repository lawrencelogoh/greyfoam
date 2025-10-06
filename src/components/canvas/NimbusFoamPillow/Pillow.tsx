import { useGLTF } from '@react-three/drei'

export function Pillow() {
  const { scene } = useGLTF('/models/pillow.glb')

  // return (
  //   <mesh castShadow receiveShadow {...props}>
  //     <boxGeometry args={[1.2, 0.5, 0.8]} />
  //     <meshStandardMaterial color="#94a3b8" roughness={0.85} metalness={0} />
  //   </mesh>
  // )

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set('#ff0000') // Red
    }
  })

  return <primitive object={scene} />
}

useGLTF.preload('/models/pillow.glb')
