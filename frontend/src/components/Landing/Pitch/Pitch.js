import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import TweenMax from 'gsap'
import vertexShader from './shaders/vertexShader.glsl'
import fragmentShader from './shaders/fragmentShader.glsl'
import Layout from '../../layout'
import { Flex, Heading, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from '@chakra-ui/react'
export const Pitch = () => {
  const [options, setOptions] = useState(defaultOptions)
  const [uniforms, setUniforms] = useState(defaultUniforms)
  const [initializeCount, setInitializeCount] = useState(0)
  const [mat, setMat] = useState(null)
  const canvasRef = React.useRef(null)
  const matRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  useLayoutEffect(() => {
    if (canvasRef.current) {
      let scene, camera, renderer
      let width, height
      let mat
      const canvas = canvasRef.current

      function init() {
        createWorld()
        createLights()
        createPrimitive()

        animation()

        setInitializeCount(initializeCount + 1)
      }

      function createWorld() {
        width = canvas.clientWidth
        height = canvas.clientHeight
        const aspect = width / height

        scene = new THREE.Scene()
        scene.fog = new THREE.Fog('#1A202C', 5, 15)
        scene.background = new THREE.Color('#1A202C')
        //---
        camera = new THREE.PerspectiveCamera(35, aspect, 1, 1000)
        camera.position.set(0, 0, options.cam.zoom)
        //---
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
        renderer.setSize(width, height)
        renderer.shadowMap.enabled = true
        //---
        //---
        window.addEventListener('resize', onWindowResize, false)
      }

      function onWindowResize() {
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        console.log('- resize -')
      }

      //--------------------------------------------------------------------
      var _ambientLights, _lights

      function createLights() {
        //_ambientLights = new THREE.AmbientLight(0xFFFFFF, 1);
        _ambientLights = new THREE.HemisphereLight(0xffffff, '#1A202C', 1.4)
        _lights = new THREE.PointLight(0xffffff, 0.5)
        _lights.position.set(20, 20, 20)
        //scene.add(_lights);
        scene.add(_ambientLights)
      }

      function createPrimitive() {
        let shape = new THREE.Object3D()
        var geo = new THREE.IcosahedronGeometry(1, 6)

        mat = new THREE.ShaderMaterial({
          wireframe: false,
          uniforms: uniforms,
          vertexShader,
          fragmentShader,
        })
        var mesh = new THREE.Mesh(geo, mat)
        shape.add(mesh)
        shape.scale.set(1, 1, 1)
        shape.rotation.y += 0.001
        scene.add(shape)
      }

      //--------------------------------------------------------------------
      var start = Date.now()

      function animation() {
        requestAnimationFrame(animation)

        TweenMax.to(camera.position, { z: options.cam.zoom })

        mat.uniforms['time'].value = options.perlin.speed * (Date.now() - start)
        mat.uniforms['pointscale'].value = options.perlin.perlins
        mat.uniforms['decay'].value = options.perlin.decay
        mat.uniforms['complex'].value = options.perlin.complex
        mat.uniforms['waves'].value = options.perlin.waves
        mat.uniforms['eqcolor'].value = options.perlin.eqcolor
        mat.uniforms['r_color'].value = options.rgb.r_color
        mat.uniforms['g_color'].value = options.rgb.g_color
        mat.uniforms['b_color'].value = options.rgb.b_color
        mat.uniforms['fragment'].value = options.perlin.fragment
        //---
        if (!matRef.current) {
          matRef.current = mat
          cameraRef.current = camera
          sceneRef.current = scene
          rendererRef.current = renderer
        }
        renderer.render(scene, camera)
      }
      init()
    }
  }, [canvasRef.current])
  useEffect(() => {
    const animateChange = () => {
      requestAnimationFrame(animateChange)

      TweenMax.to(cameraRef.current?.position, { z: options.cam.zoom })
      const start = Date.now()
      matRef.current.uniforms['time'].value = options.perlin.speed * (Date.now() - start)
      matRef.current.uniforms['pointscale'].value = options.perlin.perlins
      matRef.current.uniforms['decay'].value = options.perlin.decay
      matRef.current.uniforms['complex'].value = options.perlin.complex
      matRef.current.uniforms['waves'].value = options.perlin.waves
      matRef.current.uniforms['eqcolor'].value = options.perlin.eqcolor
      matRef.current.uniforms['r_color'].value = options.rgb.r_color
      matRef.current.uniforms['g_color'].value = options.rgb.g_color
      matRef.current.uniforms['b_color'].value = options.rgb.b_color
      matRef.current.uniforms['fragment'].value = options.perlin.fragment
      matRef.current.needsUpdate = true
      rendererRef.current?.render(sceneRef.current, cameraRef.current)
    }
    if (matRef.current) {
      animateChange()
    }
  }, [options])
  return (
    <Layout>
      <Flex className='container-fluid fixed-top header disable-selection render-container'>
        <canvas ref={canvasRef} style={{ width: '50vw', height: '100vh' }} />
        <div
          style={{ width: '50vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <LabelSlider
            label='speed'
            min={0}
            step={0.0001}
            max={0.001}
            value={options.perlin.speed}
            onChange={(value) => setOptions({ ...options, perlin: { ...options.perlin, speed: value } })}
          />
          <LabelSlider
            label='zoom'
            min={0}
            max={30}
            value={options.cam.zoom}
            onChange={(value) => setOptions({ ...options, cam: { ...options.cam, zoom: value } })}
          />

          <LabelSlider
            label='Decay'
            min={0}
            max={1}
            step={0.01}
            value={options.perlin.decay}
            onChange={(value) => setOptions({ ...options, perlin: { ...options.perlin, decay: value } })}
          />
          <LabelSlider
            label='Waves'
            min={0}
            max={10}
            value={options.perlin.waves}
            onChange={(value) => setOptions({ ...options, perlin: { ...options.perlin, waves: value } })}
          />
          <LabelSlider
            label='Color'
            min={3}
            max={50}
            value={options.perlin.eqcolor}
            onChange={(value) => setOptions({ ...options, perlin: { ...options.perlin, eqcolor: value } })}
          />
          <LabelSlider
            label='Red'
            min={0}
            max={10}
            value={options.rgb.r_color}
            onChange={(value) => setOptions({ ...options, rgb: { ...options.rgb, r_color: value } })}
          />
          <LabelSlider
            label='Green'
            min={0}
            max={10}
            value={options.rgb.g_color}
            onChange={(value) => setOptions({ ...options, rgb: { ...options.rgb, g_color: value } })}
          />
          <LabelSlider
            label='Blue'
            min={0}
            max={10}
            value={options.rgb.b_color}
            onChange={(value) => setOptions({ ...options, rgb: { ...options.rgb, b_color: value } })}
          />
        </div>
      </Flex>
    </Layout>
  )
}
const LabelSlider = ({ onChange, min, max, label, value, step = 1 }) => {
  return (
    <div>
      <Text>{label}</Text>
      <Slider defaultValue={value} width={200} step={step} onChange={onChange} min={min} max={max}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Text color='tomato'>{value}</Text>
    </div>
  )
}
const defaultOptions = {
  perlin: {
    vel: 0.002,
    speed: Math.random(10) / 10000,
    perlins: 1.0,
    decay: 0.4,
    complex: 0.0,
    waves: 10.0,
    eqcolor: 11.0,
    fragment: false,
    redhell: true,
  },
  rgb: {
    r_color: 6.0,
    g_color: 0.0,
    b_color: 0.2,
  },
  cam: {
    zoom: 10,
  },
}
const defaultUniforms = {
  time: {
    type: 'f',
    value: 1.0,
  },
  pointscale: {
    type: 'f',
    value: 1.0,
  },
  decay: {
    type: 'f',
    value: 2.0,
  },
  complex: {
    type: 'f',
    value: 2.0,
  },
  waves: {
    type: 'f',
    value: 3.0,
  },
  eqcolor: {
    type: 'f',
    value: 3.0,
  },
  fragment: {
    type: 'i',
    value: false,
  },
  dnoise: {
    type: 'f',
    value: 0.0,
  },
  qnoise: {
    type: 'f',
    value: 4.0,
  },
  r_color: {
    type: 'f',
    value: 0.0,
  },
  g_color: {
    type: 'f',
    value: 0.0,
  },
  b_color: {
    type: 'f',
    value: 0.0,
  },
}
