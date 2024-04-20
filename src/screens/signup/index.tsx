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
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_ALUNO } from "../../graphql/aluno";
import User from "../user";
import { StackTypes } from "../../routes/routes.types";
import { Picker } from "@react-native-picker/picker";
import { CURSOS } from "../../constants";
import { scale } from "react-native-size-matters";
import Input from "../../components/input";
import PickerInput from "../../components/picker-input";
import { GET_COURSES } from "../../graphql/cursos";

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
  const [cursoValue, setCursoValue] = useState<string>("");
  const [cursoIndex, setCursoIndex] = useState<number>(0);
  const [toggleCurso, setToggleCurso] = useState(false);
  const [toggleGenero, setToggleGenero] = useState(false);

  const matriculaNum = parseInt(matricula, 10);
  const idadeNum = parseInt(idade, 10);

  useEffect(() => {
    if (generoValue === 1) {
      setGenero("Masculino");
    } else {
      setGenero("Feminino");
    }
  }, [generoValue]);

  const { data: cursosData, loading: cursosLoading } = useQuery(GET_COURSES);

  if (cursosLoading) return <ActivityIndicator />;
  const parsedCourses = cursosData?.cursos.map((curso: any) => ({
    value: curso.id,
    label: curso.nome,
  }));

  useEffect(() => {
    if (parsedCourses && cursoIndex >= 0 && cursoIndex < parsedCourses.length) {
      setCurso(parsedCourses[cursoIndex].label);
      setCursoValue(
        parsedCourses.find(
          (course: { label: string }) => course.label === curso
        )?.value
      );
    }
  }, [cursoIndex, parsedCourses]);

  const [createAluno, { data, loading: createAlunoLoading }] = useMutation(
    CREATE_ALUNO,
    {
      variables: {
        nome: nome,
        email: email,
        generos: genero,
        idade: idadeNum,
        idCurso: cursoValue,
        matricula: matriculaNum,
      },
    }
  );

  return (
    <View>
      <Input
        textValue={email}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        textValue={password}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Input
        textValue={nome}
        placeholder="Nome"
        onChangeText={(text) => setNome(text)}
      />
      <Input
        textValue={matricula}
        placeholder="Matricula"
        onChangeText={(text) => setMatricula(text)}
      />
      <Input
        textValue={idade}
        placeholder="Idade"
        onChangeText={(text) => setIdade(text)}
      />
      <PickerInput
        textValue={genero}
        placeholder="Genero"
        selectedValue={generoValue}
        togglePicker={toggleGenero}
        setTogglePicker={setToggleGenero}
        onChangeText={(text) => setGenero(text)}
        items={[
          { label: "Feminino", selectedValue: 2 },
          { label: "Masculino", selectedValue: 1 },
        ]}
        onChange={(itemValue, itemIndex) => {
          setGeneroValue(itemValue), setToggleGenero(false);
        }}
      />
      <PickerInput
        textValue={curso}
        placeholder="Cursos"
        items={parsedCourses}
        togglePicker={toggleCurso}
        selectedValue={cursoIndex}
        setTogglePicker={setToggleCurso}
        onChangeText={(text) => setCurso(text)}
        onChange={(itemValue, itemIndex) => {
          setCursoIndex(itemIndex), setToggleCurso(false);
        }}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          try {
            createAluno().then(() => {
              console.log("Aluno criado com sucesso", data.createAluno.nome);
            });
            createUser(email, password);
          } catch (error) {
            console.log("Erro ao criar aluno", error);
          }
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
