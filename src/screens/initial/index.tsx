import {
  View,
  Text,
  ImageBackground,
  Image,
  Button,
  Pressable,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/routes.types';

const bg = require('../../../assets/bg.png');
const logo = require('../../../assets/logo.png');

const Initial = () => {
  const navigation = useNavigation<StackTypes>();
  
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode='cover'>
      <Image source={logo} />
      <Text style={styles.welcome}>Bem-vindo(a)</Text>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.textButton}>Criar conta</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Initial;
