
import "./Ball.css";

import { OrthographicCamera } from '@react-three/drei'
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, GradientTexture, useCursor } from '@react-three/drei'

import { useThree } from '@react-three/fiber'

function Ball({ isSmall = false }) {
  const { viewport } = useThree()
  const ref = useRef()
  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, Math.random() * 0.5, 0.01)
  }, [])
  
  // Place the box in the top-right corner
  return (
    <mesh  rotation={[-Math.PI / 10, Math.PI / 4, 0]} position={[viewport.width / 2 - 1, viewport.height / 2 - 1, 0]}>
      <sphereGeometry rotateY={0.5} args={[0.8 * (isSmall ? 0.33 : 1), 64, 64]} />
      {/*<meshStandardMaterial color="skyblue" />*/}
      <MeshDistortMaterial ref={ref} speed={5}>
        <GradientTexture stops={[0, 0.3, 0.6, 0.9, 1]} colors={['#B0E0B9', '#7b8db0', '#a1b1cf', '#ffffff']} size={100} />
      </MeshDistortMaterial>
    </mesh>
  )
}

function MovingPointLight() {
  const lightRef = useRef()

  // Animate the light's position in a circular motion
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    const radius = 0.5 // Radius of the circle the light moves on
    if (lightRef.current) {
      lightRef.current.position.x = radius * Math.sin(time / 5)
    }
  })

  return <pointLight ref={lightRef} position={[0, 1, 1]} intensity={1} />
}

export function Scene3D({ large=true }) {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  const shadowSize = 80;
  const shadowOpacity = 0.1;

  return (
    <div style={{ width: 300, height: 300, transform: large ? undefined : 'scale(0.33)' }} className={"ball-holder " + (loaded ? " loaded " : "") + (large ? "" : "small")}>
      <Canvas>
        <ambientLight intensity={5} />
        <MovingPointLight />
        <Ball />
        <OrthographicCamera makeDefault zoom={100} position={[0.5, 0.5, 5]} />
      </Canvas>
      <div style={{
        position: 'absolute',
        top: `calc(50% - ${shadowSize}px/2 + 20px)`,
        left: `calc(50% - ${shadowSize}px/2)`,
        zIndex: -1,
        borderRadius: '50%',
        width: shadowSize,
        height: shadowSize,
        background: `rgba(0,0,0,${shadowOpacity})`,
        boxShadow: `0 0 10px 40px rgba(0,0,0,${shadowOpacity})`
      }}></div>
    </div>
  )
}
