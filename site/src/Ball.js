import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise'

const AmorphousBall = () => {
  const mesh = useRef()
  const simplex = new SimplexNoise()

  // Use the frame loop to animate the geometry's vertices
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    const geometry = mesh.current.geometry

    // Iterate over each vertex of the geometry

    if (!geometry.vertices) {
      return
    }
    
    geometry.vertices.forEach((vertex) => {
      // Use simplex noise for smoother deformations
      const noise = simplex.noise3D(
        vertex.x + time * 0.5,
        vertex.y + time * 0.5,
        vertex.z + time * 0.5
      )

      // Apply the noise to the vertex position
      vertex.normalize().multiplyScalar(1 + noise * 0.3)
    })

    geometry.verticesNeedUpdate = true
    geometry.computeVertexNormals()
  })

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

export default AmorphousBall
