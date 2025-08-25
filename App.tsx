import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThreeCanvas from './src/core/ThreeCanvas';
import GreenHeatmapsModal from './src/components/GreenHeatmapsModal';
import SettingsModal from './src/components/SettingsModal';

type ModalType = 'heatmaps' | 'settings' | null;

export default function App() {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: ModalType) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const renderModalContent = () => {
    switch (modalType) {
      case 'heatmaps':
        return <GreenHeatmapsModal onClose={closeModal} />;
      case 'settings':
        return <SettingsModal onClose={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>React Native r3f app</Text>
      </View>

      {/* Canvas (middle) */}
      <ThreeCanvas />

      {/* Action Buttons (bottom) */}
      <View style={styles.actions}>
        <Button title="Heatmaps" onPress={() => openModal('heatmaps')} />
        <Button title="Settings" onPress={() => openModal('settings')} />
      </View>

      {/* Popup Modal */}
      <Modal
        visible={modalType !== null}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.overlay}>
          {renderModalContent()}
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 16,
  },
  headerText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  actions: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
