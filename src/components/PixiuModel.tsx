import React from 'react';
import { useGLTF } from '@react-three/drei/native';
import { Asset } from 'expo-asset';

const PixiuModel = () => {
  const asset = Asset.fromModule(require('../../assets/pixiu_model.glb'));
  const gltf = useGLTF(asset.uri || asset.localUri!) as any;

  return <primitive
    object={gltf.scene}
    scale={[3, 3, 3]}
  />;
};

export default PixiuModel;
