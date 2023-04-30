import React, { useEffect } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import abstractSVG1 from '../../../images/svgs/abstract_1.svg'
export const LeadershipAbout = () => {
  return (
    <section className='leadership-section about-section' style={{ paddingBottom: 200 }}>
      <Box p={100}>
        <Heading color='gray.800' fontSize='8vh' className='content__title' data-splitting='' data-effect3=''>
          <span>passion for empowering others</span>
        </Heading>
        <div
          className='header__border'
          style={{ height: '2px', marginTop: '3em', width: '200vw', background: 'var(--chakra-colors-gray-800)' }}
        />
      </Box>
      <Flex px={100}>
        <Box style={{ flex: 1 }}>
          <SpinningCircles />
        </Box>
        <Flex style={{ flex: 1 }}>
          <Text style={{ whiteSpace: 'pre' }} fontSize='1.1em' pr={10} color='gray.500' mt={4}>
            ZAC IS A LEADER
          </Text>
          <Text color='gray.700' style={{ fontSize: '3.5vh' }} className='dev-about-desc'>
            The same passion that drives me to continually learn and grow as a developer and designer also fuels me to
            invest in the growth of others. I love investing in those around me, and I am always looking for
            opportunities to do so.
          </Text>
        </Flex>
      </Flex>
    </section>
  )
}

const SpinningCircles = () => {
  const [isMounted, setIsMounted] = React.useState(false)
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)

      const canvas = document.getElementById('spinning-circles')
      const ctx = canvas.getContext('2d')

      const canvasSize = () => {
        return {
          width: window.innerWidth * window.devicePixelRatio,
          height: window.innerHeight * window.devicePixelRatio,
        }
      }

      const resizeCanvas = () => {
        const { width, height } = canvasSize()
        canvas.width = width
        canvas.height = height
      }

      resizeCanvas()

      let tick = 0
      let rotation = 0

      const createPoint = (i, r) => {
        const angleStep = (Math.PI * 6) / 300

        /* Center the spiral */
        const xPosition = canvas.width / 2
        const yPosition = canvas.height / 2

        return {
          x: xPosition + Math.cos(i * angleStep) * r,
          y: yPosition + Math.sin(i * angleStep) * r,
        }
      }

      const drawCircle = (tick, point) => {
        /* Hue */
        const h = tick * 4

        /* Radius of the circle */
        const radius = tick < 200 ? tick / 2 : 200

        ctx.strokeStyle = `hsla(${h}, 0%, 0%)`

        /* Increment line width, but set a min and max */
        ctx.lineWidth = tick * 0.05 < 0.5 ? 0.5 : tick * 0.05 > 20 ? 20 : tick * 0.05

        /* Draw the circle */
        ctx.beginPath()
        ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI)
        ctx.stroke()
      }

      let isIncrementing = true

      const draw = () => {
        window.requestAnimationFrame(draw)

        const { width, height } = canvas

        /* Position */
        const positionFromCenter = Math.pow(tick, 1.18)
        const point = createPoint(rotation, positionFromCenter)
        const point2 = createPoint(rotation + 150, positionFromCenter)

        /* Clear canvas and redraw */
        ctx.fillStyle = '#DCFF7D'
        ctx.fillRect(0, 0, width, height)

        drawCircle(tick, point)
        drawCircle(tick, point2)

        if (tick < 150 && isIncrementing) {
          tick = tick + 0.5
        }

        if (tick === 150 && isIncrementing) {
          isIncrementing = false
        }

        if (tick === 0 && !isIncrementing) {
          isIncrementing = true
        }

        if (tick > 0 && !isIncrementing) {
          tick = tick - 0.5
        }

        rotation = rotation + 0.5
      }

      window.addEventListener('resize', () => {
        resizeCanvas()
      })

      /* Initial canvas background */
      ctx.fillStyle = '#DCFF7D'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      draw()
    }
  }, [])
  return <canvas style={{ width: '50vh', height: '50vh' }} id='spinning-circles' />
}
