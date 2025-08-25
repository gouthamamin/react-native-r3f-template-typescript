import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThreeCanvas from './src/core/ThreeCanvas';

export default function App() {

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
  
      <View style={styles.header}>
        <Text style={styles.headerText}>React Native r3f app</Text>
      </View>

      {/* Canvas (middle) */}
      <ThreeCanvas />

      {/* Action Buttons (bottom) */}
      <View style={styles.actions}>
        <Button
          title="Button 1"
          onPress={() => {
          }}
        />
        <Button
          title="Button 2"
          onPress={() => {
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#222',
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
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
});
