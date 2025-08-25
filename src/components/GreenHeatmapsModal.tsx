import { Canvas } from '@react-three/fiber/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Cube from './Cube';
import Lights from '../core/Lights';

export default function GreenHeatmapsModal(props: iGreenHeatmapsModalProps) {
  return (
    <View style={styles.popup}>
      <Text style={styles.popupText}>Green Heatmaps</Text>
      <View style={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Lights />
          <Cube scale={[3,3,3]} />
        </Canvas>
      </View>

      <TouchableOpacity style={styles.closeBtn} onPress={props.onClose}>
        <Text style={styles.closeBtnText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  popup: {
    width: 280,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
  },
  canvasContainer: {
    width: 200,
    height: 200,
    marginVertical: 10,
    backgroundColor: '#ffffffff',
  },
  popupText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  closeBtn: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  closeBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
