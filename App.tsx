import { Canvas } from '@react-three/fiber/native';
import Cube from './src/components/Cube';
import Lights from './src/core/Lights';
import PixiuModel from './src/components/PixiuModel';

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
      <Lights />
      {/* <Cube /> */}
      <PixiuModel />
    </Canvas>
  );
}
