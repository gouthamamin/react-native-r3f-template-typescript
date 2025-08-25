import { Canvas } from "@react-three/fiber/native";
import { StyleSheet, View } from "react-native";
import Lights from "./Lights";
import PixiuModel from "../components/PixiuModel";
import { Environment, OrbitControls } from "@react-three/drei/native";

const ThreeCanvas = () => {
  return (
    <View style={styles.canvasContainer}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}
        onCreated={(state) => {
          const _gl = state.gl.getContext();
          const pixelStorei = _gl.pixelStorei.bind(_gl);
          _gl.pixelStorei = function (...args) {
            const [parameter] = args;
            switch (parameter) {
              case _gl.UNPACK_FLIP_Y_WEBGL:
                return pixelStorei(...args)
            }
          }
        }}
      >
        <Lights />

        <PixiuModel scale={[3, 3, 3]} position={[0, -0.5, 0]} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={10}
        />

        <Environment preset="park" background/>
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  canvasContainer: {
    flex: 1, // takes remaining space
    backgroundColor: '#fff',
  },
});

export default ThreeCanvas;