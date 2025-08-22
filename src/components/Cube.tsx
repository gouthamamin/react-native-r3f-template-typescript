import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Cube = () => {
  const cubeRef = useRef<Mesh>(null);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Cube;