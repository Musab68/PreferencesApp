import React, { useState } from 'react'; // [cite: 101]
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'; // [cite: 102]

export default function LoginScreen({ navigation }) { // [cite: 103]
  const [username, setUsername] = useState(''); // [cite: 103, 106]

  const handleLogin = () => { // [cite: 104]
    if (!username.trim()) return; // Boş giriş kontrolü [cite: 105]
    navigation.replace('Home', { username }); // Home ekranına username ile git [cite: 107]
  }; // [cite: 108]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20, borderRadius: 5 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 5 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' }
});