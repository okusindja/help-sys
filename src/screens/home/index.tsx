import { View, Text, StyleSheet, Pressable, Modal, TextInput,Button, ActivityIndicator, ScrollView,  } from "react-native";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useQuery } from "@apollo/client";
import { GET_COURSES } from "../../graphql/cursos";
import PickerInput from "../../components/picker-input";

const Home = () => {
  const [isPsicologicVisible, setPsicologicVisible] = useState(false);
  const [isFinanceVisible, setFinanceVisible] = useState(false);
  const [isSocialVisible, setSocialVisible] = useState(false);
  const { data, loading, error } = useQuery(GET_COURSES);
  const [isPressao, setPressao] = useState(0);
  const [pressaoValue, setPressaoValue] = useState(1);
  const [pressaoText, setPressaoText] = useState("Entre 80PA e 120PA");
  const [isStress, setStress] = useState(0);
  const [stressValue, setStressValue] = useState(1);
  const [stressText, setStressText] = useState("Não");
  const [isEmprego, setEmprego] = useState(0);
  const [empregoValue, setEmpregoValue] = useState(1);
  const [empregoText, setEmpregoText] = useState("Não");
  const [isFinanca, setFinanca] = useState(0);
  const [financaValue, setFinancaValue] = useState(1);
  const [financaText, setFinancaText] = useState("Não");
  const [isApoio, setApoio] = useState(0);
  const [apoioValue, setApoioValue] = useState(1);
  const [apoioText, setApoioText] = useState("Não");
  const [isDificult, setDificult] = useState(0);
  const [dificultValue, setDificultValue] = useState(1);
  const [dificultText, setDificultText] = useState("Não");
  const [isDistance, setDistance] = useState(1);
  const [distanceValue, setDistanceValue] = useState(1);
  const [distanceText, setDistanceText] = useState("Muito Proximo");

  const pressao = [
    {
      label: "Entre 80PA e 120PA",
      value: 1,
    },
    {
      label: "Maior que 120PA",
      value: 0,
    },
  ];

  const stress = [
    {
      label: "Sim",
      value: 1,
    },
    {
      label: "Nao",
      value: 0,
    },
  ];

  const emprego = [
    {
      label: "Sim",
      value: 1,
    },
    {
      label: "Nao",
      value: 0,
    },
  ];

  const financa = [
    {
      label: "Sim",
      value: 1,
    },
    {
      label: "Nao",
      value: 0,
    },
  ];

  const apoio = [
    {
      label: "Sim",
      value: 1,
    },
    {
      label: "Nao",
      value: 0,
    },
  ];

  const dificult = [
    {
      label: "Sim",
      value: 1,
    },
    {
      label: "Nao",
      value: 0,
    },
  ];

  const distance = [
    {
      label: "Muito Proximo",
      value: 1,
    },
    {
      label: "Proximo",
      value: 2,
    },
    {
      label: "Razoavel",
      value: 3,
    },
    {
      label: "Distante",
      value: 4,
    },
    {
      label: "Muito Distante",
      value: 5,
    },
  ];

  useEffect(() => {
     if (pressaoValue > 0 && pressaoValue <= pressao.length) {
    setPressaoText(pressao[pressaoValue - 1].label);
     }
  }, [pressaoValue]);

  useEffect(() => {
    setStressText(stress[stressValue - 1].label);
  }, [stressValue]);

  useEffect(() => {
    setEmpregoText(emprego[empregoValue - 1].label);
  }, [empregoValue]);

  useEffect(() => {
    setFinancaText(financa[financaValue - 1].label);
  }, [financaValue]);

  useEffect(() => {
    setApoioText(apoio[apoioValue - 1].label);
  }, [apoioValue]);

  useEffect(() => {
    setDificultText(dificult[dificultValue - 1].label);
  }, [dificultValue]);

  useEffect(() => {
    setDistanceText(distance[distanceValue - 1].label);
  }, [distanceValue]);

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Ocorreu um erro</Text>;

  const cursos = data.cursos;

  console.log("Dados", cursos);
  return (
    <View style={styles.container}>
      {/*cursos.map((curso) => (
        <Text>{curso.nome}</Text>
      ))
      */}

      <Pressable onPress={() => setPsicologicVisible(true)}>
        <View style={styles.boxe}>
          <Text style={styles.textos}>Dados Psicologicos</Text>
        </View>
      </Pressable>

      <Pressable onPress={() => setFinanceVisible(true)}>
        <View style={styles.boxe2}>
          <Text style={styles.textos}>Dados Financeiros</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => setSocialVisible(true)}>
        <View style={styles.boxe3}>
          <Text style={styles.textos}>Dados Sociais</Text>
        </View>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isPsicologicVisible}
        onRequestClose={() => setPsicologicVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.Modal1}>
            <Text style={styles.titleModal}>Dados Psicologicos</Text>
            <View>
              <View style={styles.inputs}>
                <Text>Pressao</Text>
                <PickerInput
                  items={pressao}
                  value={pressaoText}
                  placeholder="Pressão"
                  selectedValue={pressaoValue}
                  onChangeText={(text) => setPressaoText(text)}
                  onChange={(itemValue, itemIndex) =>
                    setPressaoValue(itemValue)
                  }
                />
                <Text>Estresse</Text>
                <PickerInput
                  items={stress}
                  value={stressText}
                  placeholder="Estresse"
                  selectedValue={stressValue}
                  onChangeText={(text) => setStressText(text)}
                  onChange={(itemValue, itemIndex) => setStressValue(itemValue)}
                />
                <Text>Apoio Emocional</Text>
                <PickerInput
                  items={apoio}
                  value={apoioText}
                  placeholder="Apoio Emocional"
                  selectedValue={apoioValue}
                  onChangeText={(text) => setApoioText(text)}
                  onChange={(itemValue, itemIndex) => setApoioValue(itemValue)}
                />
              </View>
              <Pressable
                style={styles.button}
                onPress={() => setPsicologicVisible(false)}
              >
                <Text style={{ color: "#fff" }}>Adicionar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isFinanceVisible}
        onRequestClose={() => setFinanceVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.Modal1}>
            <Text style={styles.titleModal}>Dados Financeiros</Text>
            <View>
              <View style={styles.inputs}>
                <Text>É empregado?</Text>
                <PickerInput
                  items={emprego}
                  value={empregoText}
                  placeholder="Emprego"
                  selectedValue={empregoValue}
                  onChangeText={(text) => setEmpregoText(text)}
                  onChange={(itemValue, itemIndex) =>
                    setEmpregoValue(itemValue)
                  }
                />
                <Text>Recebe Apoio Fianceiro?</Text>
                <PickerInput
                  items={financa}
                  value={financaText}
                  placeholder="Apoio Financeiro"
                  selectedValue={financaValue}
                  onChangeText={(text) => setFinancaText(text)}
                  onChange={(itemValue, itemIndex) =>
                    setFinancaValue(itemValue)
                  }
                />
                <Text>Enfrenta Dificuldades Financeiras?</Text>
                <PickerInput
                  items={dificult}
                  value={dificultText}
                  placeholder="Dificuldades Financeiras"
                  selectedValue={dificultValue}
                  onChangeText={(text) => setDificultText(text)}
                  onChange={(itemValue, itemIndex) =>
                    setDificultValue(itemValue)
                  }
                />
              </View>
              <Pressable
                style={styles.button}
                onPress={() => setFinanceVisible(false)}
              >
                <Text style={{ color: "#fff" }}>Adicionar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isSocialVisible}
        onRequestClose={() => setSocialVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.Modal1}>
            <Text style={styles.titleModal}>Dados Sociais</Text>
            <View>
              <View style={styles.inputs}>
                <Text>Quão distante vive da universidade</Text>
                <PickerInput
                  items={distance}
                  value={distanceText}
                  placeholder="Distancia"
                  selectedValue={distanceValue}
                  onChangeText={(text) => setDistanceText(text)}
                  onChange={(itemValue, itemIndex) =>
                    setDistanceValue(itemValue)
                  }
                />
              </View>
              <Pressable
                style={styles.button}
                onPress={() => setSocialVisible(false)}
              >
                <Text style={{ color: "#fff" }}>Adicionar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
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