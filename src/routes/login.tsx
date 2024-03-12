import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen } from "../screens";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default LoginStack;
