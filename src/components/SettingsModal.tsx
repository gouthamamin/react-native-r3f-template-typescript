import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


export default function SettingsModal(props: iSettingsModalProps) {
  return (
    <View style={styles.popup}>
      <Text style={styles.popupTitle}>Settings</Text>
      <Image
        source={require('../../assets/images/cat.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.popupText}>There is nothing here</Text>
      <TouchableOpacity style={styles.closeBtn} onPress={props.onClose}>
        <Text style={styles.closeBtnText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  popup: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  popupText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    marginBottom: 15,
    textAlign: 'center',
    color: '#666',
  },
  settingsItems: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  settingItem: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
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
  image: {
    width: 200,
    height: 200,
    marginVertical: 5
  },
});
