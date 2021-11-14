import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useDrag } from 'react-use-gesture';

function DraggableDodecahedron() {
  const ref = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.height;

  useFrame(() => {
      ref.current.rotation.z += 0.01
      ref.current.rotation.x += 0.01
  });

  const bind = useDrag(({ offset: [x, y] }) => {
      const [,, z] = position;
      setPosition([x / aspect, -y / aspect, z]);
  }, { pointerEvents: true });

  return (
      <mesh position={position} {...bind()}
          ref={ref}>

          <dodecahedronBufferGeometry attach="geometry" />
          <meshLambertMaterial attach="material" />
      </mesh>
  )
}

const DesignEditor = () => {

  return (
    <Canvas>
      <spotLight intensity={1.2} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
      <DraggableDodecahedron />
    </Canvas>
  );
};

DesignEditor.propTypes = {};

export default DesignEditor;
