import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { OrthographicCamera } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, GradientTexture, useCursor } from '@react-three/drei'


import { HomePage } from "./pages/Home";

import { useThree } from '@react-three/fiber'

function Box() {
  const { viewport } = useThree()
  const ref = useRef()
  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, Math.random() * 0.5, 0.01)
  }, [])
  
  // Place the box in the top-right corner
  return (
    <mesh  rotation={[-Math.PI / 10, Math.PI / 4, 0]} position={[viewport.width / 2 - 1, viewport.height / 2 - 1, 0]}>
      <sphereGeometry rotateY={0.5} args={[0.8, 64, 64]} />
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

function Scene3D() {

  return (
    <Canvas style={{ opacity: 0.98, position: 'absolute', top: 20, right: 20, zIndex: 1, width: 300, height: 300 }}>
      <ambientLight intensity={5} />
      <MovingPointLight />
      <Box />
      <OrthographicCamera makeDefault zoom={100} position={[0, 0, 5]} />
    </Canvas>
  )
}

const ErrorPage = ({ text = "Page Not Found" }) => {
  return <div>
    <h3 className="header">{ text }</h3>
    <img src="/Darwin1.png" alt="Page not ready" width="180" style={{ 'margin': 'auto' }}/>
  </div>
}

/*
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import AmorphousBall from './Ball'

<Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AmorphousBall />
      <OrbitControls />
    </Canvas>
    */

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/goal-overview",
    element: <ErrorPage text="Overview - Page not ready" />,
  },
  {
    path: "/our-progress",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/renewable-energy",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/three-pillars",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/business-benefits",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/recommendations",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/best-practice",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/quiz",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/partnerships",
    element: <ErrorPage text="Page not ready" />,
  },
]);

function App() {
  return (
    <>
      <Scene3D />
      <div className="content-area">
        <div className="details">
          <img src="/blocks.svg" style={{ position: 'absolute', top: -20, left: 20 }} />
          <img src="/grid.svg" style={{ position: 'absolute', top: 40, left: -40, transform: 'rotate(30deg) scale(0.8)' }} />
          <img src="/grid.svg" style={{ position: 'absolute', top: -40, left: 360, transform: 'rotate(20deg) scale(1.5)', opacity: 0.5 }} />
        </div>
        <div className="content-wrapper">
          <RouterProvider router={router} />

          <footer>Group 3 - LFE8031, QUB 2024</footer>
        </div>
      </div>
    </>
  );
}

export default App;
