import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ShapeModel from 'https://framer.com/m/ShapeModel-0RQw.js@gC9n0z0IMVvflqYMxZuc'

const BaseCanvas = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      <Canvas camera={{ position: [0, 0, 6.5] }}>
        <color attach="background" args={['#040404']} />
        {/* <ShapeParticle /> */}
        {/* <LogoModelSolid /> */}
        <ShapeModel />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default BaseCanvas
