import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import useAuth from '../../hooks/use-auth';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/routes.types';

const bg = require('../../../assets/bg.png');
const logo = require('../../../assets/logo.png');

const Login = () => {
  const { login, loading } = useAuth();
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const width = Dimensions.get('window').width;

  return (
    <ImageBackground style={styles.Tela} source={bg} resizeMode='cover'>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder='Antonio@isptec.co.ao'
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder='Password'
      />
      <Pressable style={styles.button} onPress={() => login(email, password)}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.RegText}>Não tenho conta. Criar conta</Text>
      </Pressable>
      <Image
        source={logo}
        resizeMode='contain'
        style={[styles.logo, { left: width / 3 }]}
      />
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#C3C3C3',
    paddingLeft: 12,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    marginBottom: 50,
  },
  label: {
    paddingLeft: 12,
    fontSize: 15,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFC423',
    padding: 10,
    margin: 12,
    color: '#fff',
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    margin: 12,
  },
  Tela: {
    padding: 9,
    paddingTop: 200,
    flex: 1,
  },
  RegText: {
    color: '#FFC423',
    width: '100%',
    textAlign: 'center',
    textDecorationColor: '',
  },
  logo: {
    width: 140,
    position: 'absolute',
    bottom: 60,
  },
});
