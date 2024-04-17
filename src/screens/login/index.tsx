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
    <View style={styles.Tela}>
      
      <Text style={styles.MaileSenha}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Antonio@isptec.co.ao"
      />
      <Text style={styles.MaileSenha}>Password</Text>
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
        <Text style={styles.RegText}>Não tenho conta. Criar conta</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1,
    borderRadius:12,
    borderColor:'#C3C3C3',
    paddingLeft:12
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFC423",
    padding: 10,
    margin: 12,
    borderRadius:12,
  },
  buttonText: {
    color: "black",
    margin: 12,
  },
  Tela: {
    padding:9,
    top:13,
    display:'flex',
  }, 
  MaileSenha:{
    left:12,
    fontSize:15,
  },
  RegText:{
    color:'black',
    width: '100%',
    textAlign:'center',
    textDecorationColor:'',
  }
});
