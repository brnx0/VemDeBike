import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Bicicletarios from '../components/Bicicletarios';
import EstImbui from '../../assets/images/foto-manu-dias-govenro-da-bahia-1.jpeg'
import EstCampoDaPolvora from '../../assets/images/Estação_Campo_da_Pólvora_-_01-1.jpeg'
import EstPernambues from '../../assets/images/Estação_Pernambués_-_09-1.jpeg'
import { ScrollView, TouchableOpacity, Pressable  } from 'react-native';



export default function Menu(props) {
  
  const [pernambues, setVagas] = useState(10);
  const [fontLoad] = useFonts({
    'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf')
  });
  return (

    <ScrollView style={styles.container}>
      <View style={styles.vTittle} ><Text style={styles.tittle}>Bicicletarios</Text></View>
      
        <View style={styles.margin}>
        <Bicicletarios vagas ={pernambues} text="Estação Pernambues - Salvador" image={EstPernambues}/>
        <Button  title="Localizar" onPress={ ()=> {props.navigation.navigate('Mapa')}}/>
        </View>
        <View style={styles.margin}>
        <Bicicletarios text="Estação Imbui - Salvador" image={EstImbui}/>
        <Button title="Localizar" onPress={ ()=> {props.navigation.navigate('Mapa')}}/>
        </View >
        <View style={styles.margin}>
        <Bicicletarios text="Estação Campo da Polvora - Salvador" image={EstCampoDaPolvora}/>
        <Button title="Localizar" onPress={ ()=> {props.navigation.navigate('Mapa')}}/>
        </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  vTittle:{
    backgroundColor: '#2196f3'
  },
  tittle:{
    fontFamily: 'Roboto-Medium',
    color:'white',
    fontSize: 30,
   textAlign:'center'
  },
  margin: { 
   paddingTop: 5,
    
  },
  container: {
    flex: 1,
    backgroundColor: '#9ca6ff4d'
   
    
    
   
  },
});
