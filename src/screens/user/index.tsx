import { View, Text, Pressable } from "react-native";
import React from "react";
import useAuth from "../../hooks/use-auth";

const User = () => {
  const { logout } = useAuth();
  return (
    <View>
      <Text>User</Text>
      <Pressable
        onPress={() => {
          logout();
        }}
      >
        <Text>Terminar sessão</Text>
      </Pressable>
    </View>
  );
};

export default User;
