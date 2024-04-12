import { View, Text, StyleSheet, Pressable, Modal, TextInput,Button, ActivityIndicator, ScrollView,  } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useQuery } from "@apollo/client";
import { GET_COURSES } from "../../graphql/cursos";


const Home = () => {

    const [isPsicologicVisible, setPsicologicVisible ]= useState(false)
    const [isFinanceVisible, setFinanceVisible] =useState(false)
    const [isSocialVisible, setSocialVisible]= useState(false)
    const { data, loading, error } = useQuery(GET_COURSES)
    const [isPressao, setPressao]=useState(0)
    const [isStress, setStress]=useState(0)
    const [isEmprego, setEmprego]=useState(0)
    const [isFinanca, setFinanca]=useState(0)
    const [isApoio, setApoio]=useState(0)
    const [isDificult, setDificult]=useState(0)
    const [isDistance, setDistance]=useState(1)





    if(loading) return <ActivityIndicator />
    if(error) return <Text>Ocorreu um erro</Text>

    const cursos = data.cursos;

    console.log('Dados', cursos)
  return (
    <ScrollView>
      <View style={styles.container}>
      {
      /*cursos.map((curso) => (
        <Text>{curso.nome}</Text>
      ))
      */
      }

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
        <Pressable  onPress={()=>setSocialVisible(true)}>
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
                          <Picker selectedValue={isPressao} onValueChange={(itemValue, itemIndex)=>setPressao(itemValue)}  style={styles.input}>
                            <Picker.Item label="Entre 80PA e 120PA" value={1}></Picker.Item>
                            <Picker.Item label="Maior que 120PA" value={0}></Picker.Item>
                          </Picker>
                          <Text>Estresse</Text>
                          <Picker selectedValue={isStress} onValueChange={(itemValue, itemIndex)=>setStress(itemValue)} style={styles.input}>
                            <Picker.Item label="Sim" value={1}></Picker.Item>
                            <Picker.Item label="Nao" value={0}></Picker.Item>
                          </Picker>
                          <Text>Apoio Emocional</Text>
                          <Picker selectedValue={isApoio} onValueChange={(itemValue, itemIndex)=>setApoio(itemValue)} style={styles.input}>
                            <Picker.Item label="Sim" value={1}></Picker.Item>
                            <Picker.Item label="Nao" value={0}></Picker.Item>
                          </Picker>
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
                          <Picker selectedValue={isEmprego} onValueChange={(itemValue, itemIndex)=>setEmprego(itemValue)} style={styles.input} >
                            <Picker.Item label="Sim" value={1}></Picker.Item>
                            <Picker.Item label="Nao" value={0}></Picker.Item>
                          </Picker>
                          <Text >Recebe Apoio Fianceiro?</Text>
                          <Picker selectedValue={isFinanca} onValueChange={(itemValue, itemIndex)=>setFinanca(itemValue)} style={styles.input}>
                            <Picker.Item label="Sim" value={1}></Picker.Item>
                            <Picker.Item label="Nao" value={0}></Picker.Item>
                          </Picker>
                          <Text>Enfrenta Dificuldades Financeiras?</Text>
                          <Picker selectedValue={isDificult} onValueChange={(itemValue, itemIndex)=>setDificult(itemValue)} style={styles.input}>
                            <Picker.Item label="Sim" value={1}></Picker.Item>
                            <Picker.Item label="Nao" value={0}></Picker.Item>
                          </Picker>
                        </View>
                      <Pressable style={styles.button} onPress={()=>setFinanceVisible(false)}>
                              <Text style={{color:'#fff'}}>Adicionar</Text> 
                      </Pressable>
                      
                </View>
              </View>
            </View>
        </Modal>

        <Modal  animationType="slide" transparent={true} visible={isSocialVisible} onRequestClose={()=> setSocialVisible(false)}>
          <View style={styles.overlay}>  
            <View style={styles.Modal1} >
                <Text style={styles.titleModal}>Dados Sociais</Text>
                <View>
                        <View style={styles.inputs}>
                          <Text>Quão distante vive da universidade</Text>
                          <Picker selectedValue={isDistance} onValueChange={(itemValue, itemIndex)=>setDistance(itemValue)} style={styles.input}>
                            <Picker.Item label="Muito Proximo" value={1}></Picker.Item>
                            <Picker.Item label="Proximo" value={2}></Picker.Item>
                            <Picker.Item label="Razoavel" value={3}></Picker.Item>
                            <Picker.Item label="Distante" value={4}></Picker.Item>
                            <Picker.Item label="Muito Distante" value={5}></Picker.Item>
                          </Picker>
                        </View>
                      <Pressable style={styles.button} onPress={()=>setSocialVisible(false)}>
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
    backgroundColor:'#E9E9E9'
    
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