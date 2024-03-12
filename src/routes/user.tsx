import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen, UserScreen } from "../screens";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};

export default UserStack;
