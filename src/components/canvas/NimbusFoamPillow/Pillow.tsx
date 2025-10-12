import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { usePillowStore } from '@/stores/usePillowStore'

export function Pillow() {
  const { scene } = useGLTF('/models/pillow.glb')
  const color = usePillowStore((s) => s.color)
  const materialType = usePillowStore((s) => s.material)
  const image = usePillowStore((s) => s.image)

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(color)

      if (materialType === 'cotton') {
        child.material.roughness = 0.7 // matte but not as extreme as velvet
        child.material.metalness = 0.0
      } else if (materialType === 'silk') {
        child.material.roughness = 0.25 // smoother than cotton
        child.material.metalness = 0.05 // almost non-metallic
      } else if (materialType === 'leather') {
        child.material.roughness = 0.45 // medium shine
        child.material.metalness = 0.15 // slight reflectivity
      } else if (materialType === 'velvet') {
        child.material.roughness = 0.95 // very matte
        child.material.metalness = 0.0
      }

      // load image if it exists
      if (image) {
        const loader = new THREE.TextureLoader()

        loader.load(image, (texture) => {
          child.material.map = texture
          child.material.color.set('#FFFFFF') // prevent tint
          child.material.needsUpdate = true
        })
      } else {
        child.material.color.set(color) // restore color
        child.material.map = null
        child.material.needsUpdate = true
      }
    }
  })

  return <primitive object={scene} />
}

useGLTF.preload('/models/pillow.glb')
