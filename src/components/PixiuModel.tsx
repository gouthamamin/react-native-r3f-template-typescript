import React from 'react';
import { useGLTF } from '@react-three/drei/native';
import { Asset } from 'expo-asset';
import Podium from './Podium';

const PixiuModel = (props: iPixiuModelProps) => {
  const asset = Asset.fromModule(require('../../assets/pixiu_model.glb'));
  const gltf = useGLTF(asset.uri || asset.localUri!) as any;

  return (<group>
    <primitive
      object={gltf.scene}
      scale={props.scale || [1, 1, 1]}
      position={props.position || [0, 0, 0]}
    />
    <Podium scale={[100, 100, 100]} position={[0, -0.675, 0]} />
  </group>);
};

export default PixiuModel;
