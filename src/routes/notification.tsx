import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen, NotificationScreen } from "../screens";

const Stack = createNativeStackNavigator();

const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default NotificationStack;
