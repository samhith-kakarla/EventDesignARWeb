import React from 'react';
import PropTypes from 'prop-types';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const DesignEditor = ({ width, height }) => {

  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />
      </mesh>
    </Canvas>
  );
};

DesignEditor.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default DesignEditor;
