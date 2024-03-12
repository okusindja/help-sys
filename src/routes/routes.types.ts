import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type StackNavigatorProps = {
  HomeStack: undefined;
  NotificationStack: undefined;
  UserStack: undefined;
  LoginStack: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigatorProps>;

// export type TeamDetailsProps = RouteProp<StackNavigatorProps, 'Team Details'>;
