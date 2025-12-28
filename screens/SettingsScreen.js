import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkBg : styles.lightBg]}>
      <Text style={[styles.title, theme === 'dark' ? styles.darkText : styles.lightText]}>
        Settings
      </Text>
      <Text style={[styles.text, theme === 'dark' ? styles.darkText : styles.lightText]}>
        Current Theme: {theme.toUpperCase()}
      </Text>
      
      <Pressable style={styles.button} onPress={toggleTheme}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 },
  lightBg: { backgroundColor: '#ffffff' },
  darkBg: { backgroundColor: '#121212' },
  title: { fontSize: 24, fontWeight: 'bold' },
  text: { fontSize: 18 },
  lightText: { color: '#000000' },
  darkText: { color: '#ffffff' },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 5, width: '80%' },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' }
});