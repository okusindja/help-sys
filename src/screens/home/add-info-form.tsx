import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { pickerOptions } from '../../constants/data-analise-answers';
import DadosFinanceiros from './modals/dados-financeiros';
import DadosPsicologicos from './modals/dados-psicologicos';
import DadosSociais from './modals/dados-sociais';

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  { id: 1, text: 'Já repetiu alguma disciplina?' },
  { id: 2, text: 'Qual foi o nível de pressão no final do semestre?' },
  { id: 3, text: 'Você já passou por momentos de stress?' },
  { id: 4, text: 'Você grecebeu algum tipo de apoio emocional?' },
  { id: 5, text: 'Recebeu algum apoio financeiro?' },
  { id: 6, text: 'Sofreu alguma dificuldade financeira?' },
  { id: 7, text: 'Você tem um emprego?' },
  { id: 8, text: 'Quão distante é a sua morada até a instituição?' },
];


const AddInfoForm = () => {
  const [answers, setAnswers] = useState<{ [key: number]: boolean | number }>({});


  console.log(answers)

  const handleChange = (id: number, value: boolean | number) => {
    setAnswers({
      ...answers,
      [id]: value,
    });
  };

    const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3030/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answers),
    });

    if (response.ok) {
      alert('Respostas enviadas com sucesso!');
    } else {
      alert('Erro ao enviar respostas.');
    }
  };
  
  return (
    <View style={styles.container}>
      <ProgressSteps progressBarColor="#FDC326" activeStepIconBorderColor="#FDC326" completedProgressBarColor="#FDC326" completedStepIconColor="#FDC326" labelColor="#FDC326" activeLabelColor="#FDC326">
        <ProgressStep label="Psicológicos">
          <View style={styles.stepContent}>
            {/* <DadosPsicologicos pickerOptions={pickerOptions} /> */}
            <View style={styles.container}>
              {questions.slice(0, 4).map((question) => (
                <View key={question.id} style={styles.questionContainer}>
                  <Text style={styles.questionText}>{question.text}</Text>
                  <View style={styles.radioContainer}>
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => handleChange(question.id, true)}
                    >
                      <Text style={answers[question.id] === true ? styles.radioSelected : styles.radioText}>{question.id === 2 ? 'Entre 80 e 120PA' : 'Sim'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => handleChange(question.id, false)}
                    >
                      <Text style={answers[question.id] === false ? styles.radioSelected : styles.radioText}>{question.id === 2 ? 'Maior que 120PA' : 'Não'}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ProgressStep>
        <ProgressStep label="Económicos">
          <View style={styles.stepContent}>
            <View style={styles.container}>
              {questions.slice(4, 7).map((question) => (
                <View key={question.id} style={styles.questionContainer}>
                  <Text style={styles.questionText}>{question.text}</Text>
                  <View style={styles.radioContainer}>
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => handleChange(question.id, true)}
                    >
                      <Text style={answers[question.id] === true ? styles.radioSelected : styles.radioText}>Sim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => handleChange(question.id, false)}
                    >
                      <Text style={answers[question.id] === false ? styles.radioSelected : styles.radioText}>Não</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ProgressStep>
        <ProgressStep label="Sociais" onSubmit={()=> alert("Submetido")}>
          <View style={styles.stepContent}>
            <View style={styles.container}>
              {questions.slice(7, 8).map((question) => (
                <View key={question.id} style={styles.questionContainer}>
                  <Text style={styles.questionText}>{question.text}</Text>
                  <View style={styles.radioContainer}>
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => handleChange(question.id, 1)}
                    >
                      <Text style={answers[question.id] === 1 ? styles.radioSelected : styles.radioText}>Muito Próximo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => handleChange(question.id, 2)}
                    >
                      <Text style={answers[question.id] === 2 ? styles.radioSelected : styles.radioText}>Próximo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => handleChange(question.id, 3)}
                    >
                      <Text style={answers[question.id] === 3 ? styles.radioSelected : styles.radioText}>Razoável</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => handleChange(question.id, 4)}
                    >
                      <Text style={answers[question.id] === 4 ? styles.radioSelected : styles.radioText}>Distante</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => handleChange(question.id, 5)}
                    >
                      <Text style={answers[question.id] === 5 ? styles.radioSelected : styles.radioText}>Muito Distante</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

const styles = StyleSheet.create({
  label:{
    fontSize:16,
    marginHorizontal:5,
    marginTop:10

  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    marginTop:10
  },

    container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  radioButton: {
    padding: 10,
  },
  radioText: {
    fontSize: 16,
  },
  radioSelected: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FDC326',
  }
});

export default AddInfoForm;
