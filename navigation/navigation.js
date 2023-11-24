import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../Screens/WelcomeScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}