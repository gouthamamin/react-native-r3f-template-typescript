import React from 'react';
import { useGLTF } from '@react-three/drei/native';
import { Asset } from 'expo-asset';

const PixiuModel = (props: iPixiuModelProps) => {
  const asset = Asset.fromModule(require('../../assets/pixiu_model.glb'));
  const gltf = useGLTF(asset.uri || asset.localUri!) as any;

  return <primitive
    object={gltf.scene}
    scale={props.scale || [1, 1, 1]}
    position={props.position || [0, 0, 0]}
  />;
};

export default PixiuModel;
