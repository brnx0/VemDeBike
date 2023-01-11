import React, { useState } from 'react'
import { useFonts } from 'expo-font';

import { Button, StyleSheet, Text, View } from 'react-native';
import Bicicletarios from '../components/Bicicletarios';
import EstImbui from '../../assets/images/Estação_Imbui.jpg'
import EstCampoDaPolvora from '../../assets/images/Estação_Campo_da_Pólvora_-_01-1.jpeg'
import EstPernambues from '../../assets/images/Estação_Pernambués_-_09-1.jpeg'
import SsaDeBike from '../../assets/images/csm_Bike02_8d263a33e3.jpeg'
import { ScrollView, TouchableOpacity, Pressable  } from 'react-native';



export default function Menu(props) {
  
  const [pernambues, setVagas] = useState(10);
  const [campoDaPolvora, setVaga] = useState(12);
  const [imbui, setVaga1] = useState(8);
  return (

    <ScrollView style={styles.container}>
      <View style={styles.vTittle} ><Text style={styles.tittle}>Bicicletarios</Text></View>
      
        <View style={styles.margin}>
        <Bicicletarios style={styles.bicicletarios} vagas ={pernambues} text="Estação Pernambues - Salvador" image={EstPernambues}/>
        <Button  title="Localizar" onPress={ ()=> {props.navigation.navigate('Mapa',{ titulo: "Estação Pernambues - Salvador", image: EstPernambues})}}/>
        </View>
        <View style={styles.margin}>
        <Bicicletarios  vagas ={imbui} text="Estação Imbui - Salvador" image={EstImbui}/>
        <Button title="Localizar" onPress={ ()=> {props.navigation.navigate('Mapa', { titulo: "Estação Imbui - Salvador", image: EstImbui})}}/>
        </View >
        <View style={styles.margin}>
        <Bicicletarios  vagas ={campoDaPolvora} text="Estação Campo da Polvora - Salvador" image={EstCampoDaPolvora}/>
        <Button title="Localizar" onPress={ ()=> {props.navigation.navigate('Mapa', { titulo: "Estação Campo da Polvora - Salvador", image: EstCampoDaPolvora})}}/>
        </View>
        <View style={styles.margin}>
        <Bicicletarios  vagas ={pernambues} text="Estação Campo da Polvora - Salvador" image={SsaDeBike}/>
        <Button title="Localizar" onPress={ ()=> {props.navigation.navigate('Mapa', { titulo: "Estação Campo da Polvora - Salvador", image: EstCampoDaPolvora})}}/>
        </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  vTittle:{
    backgroundColor: '#2196f3'
  },
  tittle:{
    color:'white',
    fontSize: 30,
   textAlign:'center'
  },
  margin: { 
   paddingTop: 5,
    
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bicicletarios:{
    height:'50%'
  }
});
