import { View, Text, StyleSheet, Pressable, Modal, TextInput,Button, ActivityIndicator, ScrollView, } from "react-native";
import { useState } from "react";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useQuery } from "@apollo/client";
import { GET_COURSES } from "../../graphql/cursos";


const Home = () => {

    const [isPsicologicVisible, setPsicologicVisible ]= useState(false)
    const [isFinanceVisible, setFinanceVisible] =useState(false)
    const [userInfo, setUserInfo]= useState(false)
    const { data, loading, error } = useQuery(GET_COURSES)

    if(loading) return <ActivityIndicator />
    if(error) return <Text>Ocorreu um erro</Text>

    const cursos = data.cursos;

    console.log('Dados', cursos)
  return (
    <ScrollView>
      <View style={styles.container}>
      {cursos.map((curso) => (
        <Text>{curso.nome}</Text>
      ))}

       <Pressable onPress={()=>setPsicologicVisible(true)}>
            <View style={styles.boxe}>
                <Text style={styles.textos}>Dados Psicologicos</Text>
            </View>
        </Pressable>

        <Pressable onPress={()=>setFinanceVisible(true)}>
          <View style={styles.boxe2}>
              <Text style={styles.textos}>Dados Financeiros</Text>
          </View >
        </Pressable>
        <Pressable >
            <View style={styles.boxe3}>
                <Text style={styles.textos}>Dados Sociais</Text>
            </View>
        </Pressable>

        <Modal  animationType="slide" transparent={true} visible={isPsicologicVisible} onRequestClose={()=> setPsicologicVisible(false)}>
          <View style={styles.overlay}>  
            <View style={styles.Modal1} >
                <Text style={styles.titleModal}>Dados Psicologicos</Text>
                <View>
                        <View style={styles.inputs}>
                          <Text>Pressao</Text>
                          <TextInput style={styles.input}></TextInput>
                          <Text>Estresse</Text>
                          <TextInput style={styles.input}></TextInput>
                          <Text>Apoio Emocional</Text>
                          <TextInput style={styles.input}></TextInput>
                        </View>
                      <Pressable style={styles.button} onPress={()=>setPsicologicVisible(false)}>
                              <Text style={{color:'#fff'}}>Adicionar</Text> 
                      </Pressable>
                      
                </View>
              </View>
            </View>
        </Modal>

        <Modal  animationType="slide" transparent={true} visible={isFinanceVisible} onRequestClose={()=> setFinanceVisible(false)}>
          <View style={styles.overlay}>  
            <View style={styles.Modal1} >
                <Text style={styles.titleModal}>Dados Financeiros</Text>
                <View>
                        <View style={styles.inputs}>
                          <Text>É empregado?</Text>
                          <TextInput style={styles.input}></TextInput>
                          <Text>Recebe Apoio Fianceiro?</Text>
                          <TextInput style={styles.input}></TextInput>
                          <Text>Enfrenta Dificuldades Financeiras?</Text>
                          <TextInput style={styles.input}></TextInput>
                        </View>
                      <Pressable style={styles.button} onPress={()=>setFinanceVisible(false)}>
                              <Text style={{color:'#fff'}}>Adicionar</Text> 
                      </Pressable>
                      
                </View>
              </View>
            </View>
        </Modal>
        </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
    
  container:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      gap: 18,
    },
    boxe:{
      width: 323,
      height: 142,
      backgroundColor:'#FFDC7C',
      borderRadius:10,
      
    },
    boxe2:{
      width: 323,
      height: 142,
      backgroundColor:'#FFCF4B',
      borderRadius:10,
      
    },
    boxe3:{
      width: 323,
      height: 142,
      backgroundColor:'#FFC423',
      borderRadius:10,
      
    },
    textos:{
      position:'absolute',
      bottom: 0,
      right:0,
      marginRight:9,
      marginBottom: 9,
    },
    Modal1:{
      margin:24,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      position:'absolute',
      backgroundColor:'#fff',
      width:343,
      height:603,
      borderRadius:4,
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 2,
      
      
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    },
     overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Fundo semitransparente para o efeito escuro
  },
  input:{
    width:326,
    height: 55,
    borderStyle:'solid',
    borderWidth:1.3,
    borderRadius:2,
    borderColor:'#E9E9E9',
    
  },
    inputs:{
      gap:8
    },
  titleModal:{
    marginBottom:42,
    fontSize: 16,
  },
  button:{
    width:269,
    height:55,
    backgroundColor:'#ffc423',
    borderRadius:12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 28,
    top:90,
  }
})