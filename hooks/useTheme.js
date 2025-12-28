import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useTheme() {
  const [theme, setTheme] = useState('light');

  // Uygulama açıldığında kaydedilen temayı yükle
  useEffect(() => {
    AsyncStorage.getItem('theme').then(stored => {
      if (stored) setTheme(stored);
    });
  }, []);

  // Temayı değiştiren fonksiyon
  const toggleTheme = async () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    await AsyncStorage.setItem('theme', next);
  };

  return { theme, toggleTheme };
}