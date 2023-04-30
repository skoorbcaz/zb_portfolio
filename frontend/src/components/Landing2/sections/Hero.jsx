import zbLogo from '../../../images/zb-stroke-light.png'

import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { Box, Center, Heading, Text } from '@chakra-ui/react'
import landingIllustration from '../../../images/landing-illustration.png'
import { Icon } from '@chakra-ui/icons'
import { AiFillDribbbleCircle, AiFillLinkedin, BsBehance } from 'react-icons/all'
function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100vh' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <img src={landingIllustration} alt='ZB' style={{ width: '50vw', maxWidth: '50vw' }} />
      </div>
      <Box style={{ position: 'absolute', top: 40, right: 40 }}>
        <Center mb={5}>
          <Icon className='menu-icon' w={5} h={5} as={AiFillLinkedin} />
        </Center>
        <Center mb={5}>
          <Icon className='menu-icon' w={5} h={5} as={BsBehance} />
        </Center>
        <Center mb={5}>
          <Icon className='menu-icon' w={5} h={5} as={AiFillDribbbleCircle} />
        </Center>
      </Box>
      <Heading
        fontWeight={500}
        fontSize='2vh'
        style={{ position: 'absolute', bottom: '50%', left: 40, maxWidth: '20vw' }}
      >
        My passion is <b style={{ color: 'var(--chakra-colors-brand-500)' }}>designing and engineering</b> user-beloved
        software products that simplify complex problems.
      </Heading>
      <img src={zbLogo} style={{ position: 'absolute', top: 40, left: 40, width: 55, height: 55 }} />
      <Heading size='s' style={{ position: 'absolute', bottom: 40, left: 40 }}>
        frontend engineering
      </Heading>

      <Heading size='s' style={{ position: 'absolute', bottom: 40, right: 40 }}>
        design
      </Heading>
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
    <section className='section--intro'>
      <div style={{ position: 'relative', height: '100vh', background: '#242424' }}>
        <Overlay />
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>
    </section>
  )
}
