import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Loader, useGLTF, OrbitControls, PerspectiveCamera, Stars, Bounds, Edges  } from '@react-three/drei'
import { LayerMaterial, Depth, Fresnel } from 'lamina'

import './Model.css'



export default function StarsBackground(props) {
  return (
    <>
      <Canvas className='canvas-stars'>
        <Suspense fallback={null}>
        <OrbitControls autoRotate autoRotateSpeed={0.5} rotateSpeed={0.1} enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Stars radius={250} depth={30} count={1500} factor={10} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}




