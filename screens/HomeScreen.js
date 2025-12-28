import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext'; // Context'i içe aktar

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth(); // Kullanıcıyı ve çıkış fonksiyonunu al [cite: 168, 169]

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {user?.username}</Text>
      <Pressable 
        style={styles.settingsButton} 
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>Go to Settings</Text>
      </Pressable>
      <Pressable style={styles.logoutButton} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 },
  text: { fontSize: 22, fontWeight: 'bold' },
  settingsButton: { backgroundColor: '#34C759', padding: 15, borderRadius: 5, width: '80%' },
  logoutButton: { backgroundColor: '#FF3B30', padding: 15, borderRadius: 5, width: '80%' },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' }
});