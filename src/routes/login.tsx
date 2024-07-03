import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InitialScreen, LoginScreen, SignupScreen } from '../screens';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Initial' component={InitialScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default LoginStack;
