import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import useAuth from "../../hooks/use-auth";

const User = () => {
  const { logout } = useAuth();
  return (
    <View>
      <View style={styles.lista}>  
        <Text style={styles.text}>Detalhes</Text>
        <Text style={styles.text}>Politicas</Text>
        
      
      <Pressable
        onPress={() => {
          logout();
        }}
      >
        <Text style={styles.text}>Terminar sessão</Text>
      </Pressable>
      </View>

    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  lista:{
    margin:32,
  },
  text:{
    top:22,
    fontSize:18,
    fontWeight:'400',
    marginBottom:19,
    borderBottomColor:'#c9c9c9',
    borderBottomWidth:1,
    
  }
})