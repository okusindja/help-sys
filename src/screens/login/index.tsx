import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import useAuth from "../../hooks/use-auth";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import { GET_COURSES } from "../../graphql/cursos";
import { StackTypes } from "../../routes/routes.types";

const Login = () => {
  const { login, loading } = useAuth();
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");    

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
      />
      <Pressable style={styles.button} onPress={() => login(email, password)}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Signup")}>
        <Text>Não tenho conta. Criar conta</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#191919",
    padding: 10,
    margin: 12,
  },
  buttonText: {
    color: "white",
    margin: 12,
  },
});
