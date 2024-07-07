import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens";
import AddInfoForm from "../screens/home/add-info-form";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Adicionar dados" component={AddInfoForm}/>
    </Stack.Navigator>
  );
};

export default HomeStack;
