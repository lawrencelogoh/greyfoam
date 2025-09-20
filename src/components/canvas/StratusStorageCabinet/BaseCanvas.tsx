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
            <boxGeometry args={[1.2, 1.6, 0.5]} />
            <meshStandardMaterial color="#64748b" />
          </mesh>
        </Center>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  )
}
