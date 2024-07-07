import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type StackNavigatorProps = {
  HomeStack: undefined;
  "Adicionar dados": undefined;
  NotificationStack: undefined;
  UserStack: undefined;
  LoginStack: undefined;
  Login: undefined;
  Signup: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigatorProps>;

// export type TeamDetailsProps = RouteProp<StackNavigatorProps, 'Team Details'>;
