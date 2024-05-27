import React, { useReducer } from 'react';
import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import { ApolloError, useMutation, useQuery } from '@apollo/client';
import { CREATE_DATA_ANALISE } from '../../graphql/data-analise';
import useAuth from '../../hooks/use-auth';

import { HomeState } from './home.types';
import { pickerOptions } from '../../constants/data-analise-answers';
import DadosPsicologicos from './modals/dados-psicologicos';
import DadosFinanceiros from './modals/dados-financeiros';
import DadosSociais from './modals/dados-sociais';
import ToggleButton from './modals/toggle-button';
import { initialState, reducer } from './reducer';
import { styles } from './styles';
import { GET_ALUNO_BY_EMAIL, GET_ALUNOS } from '../../graphql/aluno';

const Home: React.FC = () => {
  const { user } = useAuth();
  const [state, dispatch] = useReducer(reducer, initialState);

  const email = user!.email;

  const [createDataAnalise, { data, loading, error }] = useMutation(
    CREATE_DATA_ANALISE,
    {
      variables: {
        apoioEmocional: state.apoioText,
        dificuldadesFinanceiras: state.dificultText,
        distancia: state.distanciaText,
        empregado: state.empregoText,
        estresse: state.stressText,
        pressao: state.pressaoText,
        apoioFinanceiro: state.financaText,
        email: email,
      },
    }
  );

  if (error) {
    console.error('Error submitting data:', error.message);
  }

  const toggleModal = (modal: keyof HomeState) => {
    dispatch({ type: 'TOGGLE_MODAL', modal });
  };
  return (
    <View style={styles.container}>
      <ToggleButton
        title='Dados Psicologicos'
        onPress={() => toggleModal('isPsicologicVisible')}
      />
      <DadosPsicologicos
        isVisible={state.isPsicologicVisible}
        toggleVisibility={() => toggleModal('isPsicologicVisible')}
        pickerOptions={pickerOptions}
      />

      <ToggleButton
        title='Dados Financeiros'
        onPress={() => toggleModal('isFinanceVisible')}
      />
      <DadosFinanceiros
        isVisible={state.isFinanceVisible}
        toggleVisibility={() => toggleModal('isFinanceVisible')}
        pickerOptions={pickerOptions}
      />
      <ToggleButton
        title='Dados Sociais'
        onPress={() => toggleModal('isSocialVisible')}
      />
      <DadosSociais
        isVisible={state.isSocialVisible}
        toggleVisibility={() => toggleModal('isSocialVisible')}
        pickerOptions={pickerOptions}
      />
      <Pressable
        style={styles.finalButton}
        onPress={() => {
          try {
            createDataAnalise().then(() => {
              console.log(
                'Aluno criado com sucesso',
                data?.createDataAnalise.id
              );
            });
          } catch (error) {
            console.log('Erro ao criar aluno', error);
          }
        }}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Enviar meus dados</Text>
        )}
      </Pressable>
    </View>
  );
};

export default Home;
