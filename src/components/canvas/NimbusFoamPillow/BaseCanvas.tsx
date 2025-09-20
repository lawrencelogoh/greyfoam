import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Center } from '@react-three/drei'
import styles from '../BaseCanvas.module.css'

export function BaseCanvas() {
  return (
    <div className={styles.canvasRoot}>
      <Canvas className={styles.fullscreenCanvas} shadows>
        <color attach="background" args={["#f8fafc"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <Environment preset="city" />
        <Center>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.2, 0.5, 0.8]} />
            <meshStandardMaterial color="#94a3b8" />
          </mesh>
        </Center>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  )
}
