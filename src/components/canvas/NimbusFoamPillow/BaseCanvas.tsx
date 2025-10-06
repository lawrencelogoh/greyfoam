import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Center } from '@react-three/drei'
import styles from '../BaseCanvas.module.css'
import { Pillow } from './Pillow'

export function BaseCanvas() {
  return (
    <div className={styles.canvasRoot}>
      <Canvas className={styles.fullscreenCanvas} shadows>
        <color attach="background" args={['#f8fafc']} />
        <ambientLight intensity={0.2} />
        {/* Key Light */}
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        {/* Fill Light */}
        <directionalLight position={[-5, 3, 2]} intensity={0.5} />{' '}
        {/* Rim / Back Light */}
        <directionalLight position={[0, 5, -5]} intensity={0.7} />{' '}
        <Environment preset="city" />
        <Center>
          <Pillow />
        </Center>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  )
}
