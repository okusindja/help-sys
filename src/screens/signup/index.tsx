import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/use-auth";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@apollo/client";
import { CREATE_ALUNO } from "../../graphql/aluno";
import User from "../user";
import { StackTypes } from "../../routes/routes.types";
import { Picker } from "@react-native-picker/picker";
import { CURSOS } from "../../constants";
import { scale } from "react-native-size-matters";
import Input from "../../components/input";
import PickerInput from "../../components/picker-input";
const Signup = () => {
  const { createUser, loading } = useAuth();
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [idade, setIdade] = useState("");
  const [genero, setGenero] = useState<string>("");
  const [generoValue, setGeneroValue] = useState<number>(1);
  const [curso, setCurso] = useState("");
  const [cursoValue, setCursoValue] = useState<number>(1);
  const [toggleCurso, setToggleCurso] = useState(false);
  const [toggleGenero, setToggleGenero] = useState(false);

  const { user } = useAuth();

  const authId = user?.uid;

  const matriculaNum = parseInt(matricula, 10);
  const idadeNum = parseInt(idade, 10);

  useEffect(() => {
    if (generoValue === 1) {
      setGenero("Masculino");
    } else {
      setGenero("Feminino");
    }
  }, [generoValue]);

  useEffect(() => {
    setCurso(CURSOS[cursoValue - 1].label);
  }, [cursoValue]);

  const [createAluno, { data, loading: createAlunoLoading }] = useMutation(
    CREATE_ALUNO,
    {
      variables: {
        nome: nome,
        curso: curso,
        authId: authId,
        generos: genero,
        idade: idadeNum,
        matricula: matriculaNum,
      },
    }
  );

  return (
    <View>
      <Input
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <Input
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
      />
      <Input
        onChangeText={(text) => setNome(text)}
        value={nome}
        placeholder="Nome"
      />
      <Input
        onChangeText={(text) => setMatricula(text)}
        value={matricula}
        placeholder="Matricula"
      />
      <Input
        onChangeText={(text) => setIdade(text)}
        value={idade}
        placeholder="Idade"
      />
      <PickerInput
        value={genero}
        placeholder="Genero"
        selectedValue={generoValue}
        onChangeText={(text) => setGenero(text)}
        items={[
          { label: "Feminino", value: 2 },
          { label: "Masculino", value: 1 },
        ]}
        onChange={(itemValue, itemIndex) => {
          setGeneroValue(itemValue), setToggleGenero(false);
        }}
      />
      <PickerInput
        value={curso}
        items={CURSOS}
        placeholder="Cursos"
        selectedValue={cursoValue}
        onChangeText={(text) => setCurso(text)}
        onChange={(itemValue, itemIndex) => {
          setCursoValue(itemValue), setToggleCurso(false);
        }}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          createUser(email, password),
            createAluno(),
            console.log("Aluno criado: ", data.student);
        }}
      >
        {loading && createAlunoLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Criar conta</Text>
        )}
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: scale(8),
            color: "#FFC423",
          }}
        >
          Já tenho uma conta. Fazer login
        </Text>
      </Pressable>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    paddingLeft: scale(12),
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#C3C3C3",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFC423",
    padding: 10,
    margin: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    margin: 12,
  },
  textAlign: {
    left: 14,
  },
  pickerStyle: {
    margin: 12,
    // width: 366,
    // height: 50,
    backgroundColor: "#E9E9E9",
    borderColor: "blue",
    // borderWidth: 13
  },
});
