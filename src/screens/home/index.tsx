import React, { useReducer } from 'react';
import { View, Text, Pressable, ActivityIndicator,Image, ImageBackground } from 'react-native';
import { useMutation } from '@apollo/client';
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
import { NotificationSVG } from '../../components/svg';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/routes.types';


const logo = require('../../../assets/Logotipo.png');
const bg = require('../../../assets/bg-2.png');
const logout = require('../../../assets/logout-variant.png');
const Home: React.FC = () => {
  const { user } = useAuth();
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigation = useNavigation<StackTypes>();

  const toggleModal = (modal: keyof HomeState) => {
    dispatch({ type: 'TOGGLE_MODAL', modal });
  };
  return (
    <View style={styles.container}>
      <View style={styles.cima}>
          <Image source={logo} style={styles.logo} resizeMode="contain"></Image>

            <View  style={styles.infoStudent} >
              <View>
              <Text style={styles.nome}>Andre Lucamba</Text>
              <Text style={styles.infoUni}>2 Ano - Engenharia Informatica</Text>
              <Text style={styles.infoUni}>ISPTEC</Text>
              </View>
            <View style={styles.logout}>
                <Image source={logout} resizeMode="contain"></Image>
            </View>
          </View>
          
      </View >
      <View style={styles.baixo}>
        <View style={styles.bottomContainer}>
            <View style={styles.infoCard} >
                <View style={styles.estudantes}>
                  <Text style={styles.infoTextNumber}>12.385</Text>
                  <Text style={styles.infoText}>Estudantes</Text>
                </View>
                <View style={styles.analisados}>
                  <Text style={styles.infoTextNumber}>12.385</Text>
                  <Text style={styles.infoText}>Analisados</Text>

                </View>
                <View style={styles.ajudados}>
                  <Text style={styles.infoTextNumber}>12.385</Text>
                  <Text style={styles.infoText}>Ajudados</Text>
                  
                </View>
            </View>
            <Pressable onPress={()=> navigation.navigate("Adicionar dados")}>
            <ImageBackground style={styles.addDados} source={bg} resizeMode="cover">
              <Text style={styles.addDadosTitle}>Adicionar dados de Estudo</Text>
              <Text style={styles.addDadosParagraph}>Psicologicos</Text>
              <Text style={styles.addDadosParagraph}>Economicos</Text>
              <Text style={styles.addDadosParagraph}>e Sociais</Text>
            </ImageBackground>
            </Pressable>
            {

            }
            <View style={styles.sugestao}>
              <View style={styles.sugestaoWrapper}>
                <NotificationSVG maxWidth={24} maxHeight={24} />
                <Text style={styles.sugestaoText}>Sugestões</Text>
                </View>
            </View>
            </View>
      </View>
    </View>
  );
};

export default Home;
