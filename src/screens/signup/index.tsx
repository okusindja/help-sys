import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/use-auth';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/routes.types';
import { scale } from 'react-native-size-matters';
import Input from '../../components/input';
import PickerInput from '../../components/picker-input';
import { useQuery, useMutation } from 'react-query';
import endpoints from '../../api/endpoints';
import { CURSOS } from '../../constants';
import { useForm, Controller } from "react-hook-form"
import axios from 'axios';


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
  const [anoCurricular, setAnoAcademicoValue] = useState(1);
  const [generoLabel, setGenero] = useState('');
  const [genero, setGeneroValue] = useState(0);
  const [curso, setCurso] = useState('');
  const [cursoValue, setCursoValue] = useState('');
  const [cursoId, setCursoIndex] = useState(0);
  const [toggleCurso, setToggleCurso] = useState(false);
  const [toggleGenero, setToggleGenero] = useState(false);
  const [toggleAnoAcademico, setToggleAnoAcademico] = useState(false);

  const matriculaNum = parseInt(matricula, 10);
  const idadeNum = parseInt(idade, 10);

  const { data: cursosData, isLoading: cursosLoading, isError: cursosIsError, error: cursosError } = useQuery(
    ["getAllCursos"],
    () => endpoints.getAllCursos());



const handleSubmit = async () =>{
  try{
      const response = await endpoints.createAluno({
          nome,
        matricula: Number(matricula),
        email,
        idade: Number(idade),
        genero: Boolean(genero),
        anoCurricular: Number(anoCurricular),
        cursoId:Number(cursoId) ,
      },).then(
        ()=>{
          alert('Cadastrado com sucesso!')
        }
      ) ;
      
    }catch{
      
    }

}



  useEffect(() => {
    setGenero(genero === 1 ? 'Masculino' : 'Feminino');
  }, [genero]);

  useEffect(() => {
    setAnoAcademico(
      anoCurricular === 5
        ? 'quinto'
        : anoCurricular === 4
        ? 'quarto'
        : anoCurricular === 3
        ? 'terceiro'
        : anoCurricular === 2
        ? 'segundo'
        : 'primeiro'
    );
  }, [anoCurricular]);

// TODO: TUDO QUE TIVER O ARRAY "CURSOS", SUBSTITUIR POR "cousesData" como comoentado acima, ou pelo data que retorna o array da query

  const parsedCourses = cursosData.map(
    (curso: { id: number; titulo: string }) => ({
      value: curso.id,
      label: curso.titulo,
    })
  );

  useEffect(() => {
    if (cursosData) {
      if (cursoId >= 0 && cursoId < parsedCourses.length) {
        const selectedCurso = parsedCourses[cursoId];
        setCurso(selectedCurso.titulo);
        setCursoValue(selectedCurso.id);
      }
    }
  }, [cursosData, cursoId]);

  // if (cursosLoading) return <ActivityIndicator size='large' />;

  return (
    <ImageBackground style={styles.Tela} source={bg} resizeMode='cover'>
      <ScrollView>
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
        selectedValue={anoCurricular}
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
        textValue={generoLabel}
        placeholder='Genero'
        selectedValue={genero}
        togglePicker={toggleGenero}
        setTogglePicker={setToggleGenero}
        onChangeText={(text) => setGenero(text)}
        items={[
          { label: 'Feminino', selectedValue: 0 },
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
        selectedValue={cursoId}
        setTogglePicker={setToggleCurso}
        onChangeText={(text) => setCurso(text)}
        onChange={(itemValue, itemIndex) => {
          setCursoIndex(itemIndex), setToggleCurso(false);
        }}
      />
      <Pressable
        style={styles.button}
        // onPress={() => {
        //   try {
        //     createAluno().then(() => {
        //       console.log('Aluno criado com sucesso', data.createAluno.nome);
        //     });
        //     createUser(email, password);
        //   } catch (error) {
        //     console.log('Erro ao criar aluno', error);
        //   }
        // }}
        onPress={handleSubmit}
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
      </ScrollView>
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
