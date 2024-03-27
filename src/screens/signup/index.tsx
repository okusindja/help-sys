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
import { useMutation } from "@apollo/client";
import { CREATE_ALUNO } from "../../graphql/aluno";
import User from "../user";
import { StackTypes } from "../../routes/routes.types";

const Signup = () => {
  const { createUser, loading } = useAuth();
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [idade, setIdade] = useState("");
  const [genero, setGenero] = useState("");
  const [curso, setCurso] = useState("");

  const { user } = useAuth();

  const authId = user?.uid

  const matriculaNum = parseInt(matricula, 10);
  const idadeNum = parseInt(idade, 10);

  const [createAluno, { data, loading: createAlunoLoading }] = useMutation(CREATE_ALUNO, {
    variables: {
      nome: nome,
      matricula: matriculaNum,
      idade: idadeNum,
      generos: genero,
      // curso: curso,
      authId: authId
    }
  })

  return (
    <View>
      <Text>Criar conta</Text>
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
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNome(text)}
        value={nome}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMatricula(text)}
        value={matricula}
        placeholder="Matricula"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setIdade(text)}
        value={idade}
        placeholder="Idade"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setGenero(text)}
        value={genero}
        placeholder="Genero"
      />

      <Pressable
        style={styles.button}
        onPress={() => {createUser(email, password), createAluno(), console.log('Aluno criado: ', data.student)}}
      >
        {loading && createAlunoLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Criar conta</Text>
        )}
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text>Já tenho uma conta. Fazer login</Text>
      </Pressable>
    </View>
  );
};

export default Signup;

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
