import { NavigationContainer } from '@react-navigation/native'; // [cite: 73]
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // [cite: 74-75]
import LoginScreen from './screens/LoginScreen'; // [cite: 76]
import HomeScreen from './screens/HomeScreen'; // [cite: 77]
import SettingsScreen from './screens/SettingsScreen'; // [cite: 78]

const Stack = createNativeStackNavigator(); // [cite: 79-80]

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} // [cite: 81-90]