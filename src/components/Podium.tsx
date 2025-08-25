import React from 'react';
import { useGLTF } from '@react-three/drei/native';

const Podium = (props: iPodiumProps) => {
  const gltf = useGLTF(require("../../assets/podium.glb")) as any;
  return <primitive {...props} object={gltf.scene} />
};

export default Podium;
