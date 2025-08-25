import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface GreenHeatmapsModalProps {
  onClose: () => void;
}

export default function GreenHeatmapsModal({ onClose }: GreenHeatmapsModalProps) {
  return (
    <View style={styles.popup}>
      <Text style={styles.popupText}>Green Heatmaps</Text>
      <Text style={styles.description}>This shows green heatmap data visualization</Text>
      <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
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
