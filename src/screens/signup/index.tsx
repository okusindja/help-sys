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
import { Picker } from "@react-native-picker/picker";
const Signup = () => {
  const { createUser, loading } = useAuth();
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [idade, setIdade] = useState("");
  const [genero, setGenero] = useState(0);
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
     <Text style={styles.textAlign} >Genero</Text>
      <Picker style={styles.pickerStyle} selectedValue={1} onValueChange={(itemValue,itemIndex)=>setGenero(itemValue)}>
          <Picker.Item label="Masculino" value={1} style={styles.input}></Picker.Item>
          <Picker.Item label="Feminino" value={0}></Picker.Item>
      </Picker>
     <Text style={styles.textAlign}>Curso</Text>
      <Picker style={styles.pickerStyle} selectedValue={1} onValueChange={(itemValue,itemIndex)=>setGenero(itemValue)}>
          <Picker.Item label="Engenharia Quimica" value={1} ></Picker.Item>
          <Picker.Item label="Engenharia Informatica" value={2}></Picker.Item>
          <Picker.Item label="Engenharia Producao Industrial" value={3}></Picker.Item>
          <Picker.Item label="Gestao Empresarial" value={4}></Picker.Item>
          <Picker.Item label="Engenharia de Petroleos" value={5}></Picker.Item>
          <Picker.Item label="Contabilidade" value={6}></Picker.Item>
          <Picker.Item label="Economia" value={7}></Picker.Item>
          <Picker.Item label="Geofisica" value={8}></Picker.Item>
          <Picker.Item label="Engenharia Civil" value={9}></Picker.Item>
          <Picker.Item label="Engenharia Electrotécnica" value={10}></Picker.Item>
          <Picker.Item label="Engenharia Mecanica" value={11}></Picker.Item>
      </Picker>
      
      

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
        <Text style={{left:82, top:12, color:'#FFC423' }}>Já tenho uma conta. Fazer login</Text>
      </Pressable>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius:12,
    borderColor:'#C3C3C3',
  },
  button: {
     alignItems: "center",
    backgroundColor: "#FFC423",
    padding: 10,
    margin: 12,
    borderRadius:12,
  },
  buttonText: {
    color: "white",
    margin: 12,
  },
  textAlign:{
    left: 14,
  },
  pickerStyle: {
    margin: 12,
    width: 366,
    height: 50,
    backgroundColor: '#E9E9E9',
    borderColor: 'blue',
    borderWidth: 13
  }
});
