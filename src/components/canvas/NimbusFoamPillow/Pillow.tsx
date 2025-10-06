import { useGLTF } from '@react-three/drei'

import { usePillowStore } from '@/stores/usePillowStore'

export function Pillow() {
  const { scene } = useGLTF('/models/pillow.glb')
  const color = usePillowStore((s) => s.color)
  const materialType = usePillowStore((s) => s.material)

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(color)

      if (materialType === 'silk') {
        child.material.roughness = 0.1
        child.material.metalness = 0.3
      } else if (materialType === 'velvet') {
        child.material.roughness = 0.9
        child.material.metalness = 0
      } else if (materialType === 'leather') {
        child.material.roughness = 0.4
        child.material.metalness = 0.6
      }
    }
  })

  return <primitive object={scene} />
}

useGLTF.preload('/models/pillow.glb')
