import zbLogo from '../../images/zb-stroke-light.png'

import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { Heading, Text } from '@chakra-ui/react'
import landingIllustration from '../../images/landing-illustration.png'
function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100vh' }}>
      <Text fontSize='1.4em' style={{ position: 'absolute', bottom: 40, left: 40 }}>
        frontend engineering
      </Text>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <img src={landingIllustration} alt='ZB' style={{ width: '60vw', maxWidth: '60vw' }} />
      </div>

      <img src={zbLogo} style={{ position: 'absolute', top: 40, left: 40, width: 55, height: 55 }} />

      <Text fontSize='1.4em' style={{ position: 'absolute', bottom: 40, right: 40 }}>
        design
      </Text>
    </div>
  )
}
const Stars = (props) => {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color='#ffa0e0' size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
export const LandingHero = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Overlay />
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  )
}
