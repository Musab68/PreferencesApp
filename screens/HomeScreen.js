import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // [cite: 126]

export default function HomeScreen({ route }) { // [cite: 127]
  const { username } = route.params; // Login'den gönderilen veriyi al [cite: 129]

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {username}</Text> 
    </View>
  ); // [cite: 130]
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 }
});