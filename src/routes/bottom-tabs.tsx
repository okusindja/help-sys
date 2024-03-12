import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";

import { scale } from "react-native-size-matters";
import { HomeSVG, NotificationSVG, UserSVG } from "../components/svg";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeStack from "./home";
import NotificationStack from "./notification";
import UserStack from "./user";
import { useTheme } from "../context/theme";

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  const { theme } = useTheme();
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <SafeAreaView style={{ backgroundColor: "#fff" }} />
      <Tab.Navigator
        inactiveColor={theme.colors.secondary}
        initialRouteName="HomeStack"
        activeColor={"#000"}
        barStyle={{
          backgroundColor: "#fff",
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: "Início",
            tabBarIcon: ({ color, focused }) => (
              <HomeSVG
                color={color}
                maxWidth={scale(16)}
                maxHeight={scale(16)}
                outline={!focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="BattlesStack"
          component={NotificationStack}
          options={{
            tabBarLabel: "Notificações",
            tabBarIcon: ({ color, focused }) => (
              <NotificationSVG
                color={color}
                maxWidth={scale(16)}
                maxHeight={scale(16)}
                outline={!focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="NewsStack"
          component={UserStack}
          options={{
            tabBarLabel: "Usuário",
            tabBarIcon: ({ color, focused }) => (
              <UserSVG
                color={color}
                maxWidth={scale(16)}
                maxHeight={scale(16)}
                outline={!focused}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
