import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/use-auth';
import { useNavigation } from '@react-navigation/native';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_ALUNO } from '../../graphql/aluno';
import { StackTypes } from '../../routes/routes.types';
import { scale } from 'react-native-size-matters';
import Input from '../../components/input';
import PickerInput from '../../components/picker-input';
import { GET_COURSES } from '../../graphql/cursos';

const bg = require('../../../assets/bg.png');
const logo = require('../../../assets/logo.png');

const Signup = () => {
  
  const { createUser, loading } = useAuth();
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [idade, setIdade] = useState('');
  const [anoAcademico, setAnoAcademico] = useState('');
  const [anoAcademicoValue, setAnoAcademicoValue] = useState(1);
  const [genero, setGenero] = useState('');
  const [generoValue, setGeneroValue] = useState(1);
  const [curso, setCurso] = useState('');
  const [cursoValue, setCursoValue] = useState('');
  const [cursoIndex, setCursoIndex] = useState(0);
  const [toggleCurso, setToggleCurso] = useState(false);
  const [toggleGenero, setToggleGenero] = useState(false);
  const [toggleAnoAcademico, setToggleAnoAcademico] = useState(false);

  const matriculaNum = parseInt(matricula, 10);
  const idadeNum = parseInt(idade, 10);

  const { data: cursosData, loading: cursosLoading } = useQuery(GET_COURSES);
  const [createAluno, { data, loading: createAlunoLoading }] = useMutation(
    CREATE_ALUNO,
    {
      variables: {
        nome: nome,
        email: email,
        genero: genero,
        idade: idadeNum,
        ano: anoAcademico,
        idCurso: cursoValue,
        matricula: matriculaNum,
      },
    }
  );

  useEffect(() => {
    setGenero(generoValue === 1 ? 'Masculino' : 'Feminino');
  }, [generoValue]);

  useEffect(() => {
    setAnoAcademico(
      anoAcademicoValue === 5
        ? 'quinto'
        : anoAcademicoValue === 4
        ? 'quarto'
        : anoAcademicoValue === 3
        ? 'terceiro'
        : anoAcademicoValue === 2
        ? 'segundo'
        : 'primeiro'
    );
  }, [anoAcademicoValue]);

  const parsedCourses = cursosData?.cursos.map(
    (curso: { id: string; nome: string }) => ({
      value: curso.id,
      label: curso.nome,
    })
  );

  useEffect(() => {
    if (cursosData) {
      if (cursoIndex >= 0 && cursoIndex < parsedCourses.length) {
        const selectedCurso = parsedCourses[cursoIndex];
        setCurso(selectedCurso.label);
        setCursoValue(selectedCurso.value);
      }
    }
  }, [cursosData, cursoIndex]);

  if (cursosLoading) return <ActivityIndicator size='large' />;

  return (
    <ImageBackground style={styles.Tela} source={bg} resizeMode='cover'>
      <Text style={styles.title}>Criar conta</Text>
      <Input
        textValue={email}
        color='white'
        placeholder='Email'
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        textValue={password}
        color='white'
        placeholder='Password'
        onChangeText={(text) => setPassword(text)}
      />
      <Input
        textValue={nome}
        color='white'
        placeholder='Nome'
        onChangeText={(text) => setNome(text)}
      />
      <Input
        textValue={matricula}
        color='white'
        placeholder='Matricula'
        onChangeText={(text) => setMatricula(text)}
      />
      <PickerInput
        color='white'
        textValue={anoAcademico}
        placeholder='Ano Academico'
        selectedValue={anoAcademicoValue}
        togglePicker={toggleAnoAcademico}
        setTogglePicker={setToggleAnoAcademico}
        onChangeText={(text) => setAnoAcademico(text)}
        items={[
          { label: '1º ano', selectedValue: 1 },
          { label: '2º ano', selectedValue: 2 },
          { label: '3º ano', selectedValue: 3 },
          { label: '4º ano', selectedValue: 4 },
          { label: '5º ano', selectedValue: 5 },
        ]}
        onChange={(itemValue, itemIndex) => {
          setAnoAcademicoValue(itemValue), setToggleAnoAcademico(false);
        }}
      />
      <Input
        textValue={idade}
        placeholder='Idade'
        color='white'
        onChangeText={(text) => setIdade(text)}
      />
      <PickerInput
        color='white'
        textValue={genero}
        placeholder='Genero'
        selectedValue={generoValue}
        togglePicker={toggleGenero}
        setTogglePicker={setToggleGenero}
        onChangeText={(text) => setGenero(text)}
        items={[
          { label: 'Feminino', selectedValue: 2 },
          { label: 'Masculino', selectedValue: 1 },
        ]}
        onChange={(itemValue, itemIndex) => {
          setGeneroValue(itemValue), setToggleGenero(false);
        }}
      />
      <PickerInput
        color='white'
        textValue={curso}
        placeholder='Cursos'
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
              console.log('Aluno criado com sucesso', data.createAluno.nome);
            });
            createUser(email, password);
          } catch (error) {
            console.log('Erro ao criar aluno', error);
          }
        }}
      >
        {loading && createAlunoLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Criar conta</Text>
        )}
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            marginTop: scale(8),
            color: '#FFC423',
          }}
        >
          Já tenho uma conta. Fazer login
        </Text>
      </Pressable>
    </ImageBackground>
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
    borderColor: '#C3C3C3',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFC423',
    padding: 10,
    margin: 12,
    borderRadius: 12,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
    margin: 12,
  },
  Tela: {
    padding: 9,
    paddingTop: 90,
    flex: 1,
  },
  textAlign: {
    left: 14,
  },
  pickerStyle: {
    margin: 12,
    // width: 366,
    // height: 50,
    backgroundColor: '#E9E9E9',
    borderColor: 'blue',
    // borderWidth: 13
  },
});
