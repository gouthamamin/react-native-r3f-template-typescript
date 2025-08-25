import { Canvas } from '@react-three/fiber/native';
import Cube from './src/components/Cube';
import Lights from './src/core/Lights';
import PixiuModel from './src/components/PixiuModel';
import { OrbitControls } from '@react-three/drei';

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
      <Lights />
      {/* <Cube /> */}
      <PixiuModel scale={[3, 3, 3]} position={[0, -0.5, 0]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        rotateSpeed={10}
      />
    </Canvas>
  );
}
