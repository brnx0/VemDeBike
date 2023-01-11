import React, { useState } from 'react'
import { useFonts } from 'expo-font';

import { Button, StyleSheet, Text, View } from 'react-native';
import Bicicletarios from '../components/Bicicletarios';
import EstImbui from '../../assets/images/Estação_Imbui.jpg'
import EstCampoDaPolvora from '../../assets/images/Estação_Campo_da_Pólvora_-_01-1.jpeg'
import EstPernambues from '../../assets/images/Estação_Pernambués_-_09-1.jpeg'
import SsaDeBike from '../../assets/images/csm_Bike02_8d263a33e3.jpeg'
import { ScrollView, TouchableOpacity, Pressable  } from 'react-native'



 



export default function Menu(props) {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
  });
  const [pernambues, setVagas] = useState(10);
  const [campoDaPolvora, setVaga] = useState(12);
  const [imbui, setVaga1] = useState(8);
  const [ribeira, setVaga2] = useState(8);

  return (

    <ScrollView style={styles.container}>
      <View style={styles.view1}>
      <View style={styles.vTittle} ><Text style={styles.tittle}>Bicicletarios</Text></View>
        <View style={styles.margin}>

        <Bicicletarios style={styles.bicicletarios} text="Estação Pernambues - Salvador"  vagas ={pernambues} image={EstPernambues}/>
        <Button  title="Localizar" onPress={ ()=> {props.navigation.navigate('Mapa',{ titulo: "Estação Pernambues - Salvador", image: EstPernambues, link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9405560978485!2d-38.460003885761544!3d-12.975653863404851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b1c2e0717ed%3A0x1afb82eb6ca850b5!2sPernambu%C3%A9s!5e0!3m2!1spt-BR!2sbr!4v1673443994659!5m2!1spt-BR!2sbr"  })}}/>
        </View>
        <View style={styles.margin}>

        <Bicicletarios  style={styles.text} vagas ={imbui} text="Estação Imbui - Salvador" image={EstImbui}/>
        <Button title="Localizar" onPress={ ()=> {props.navigation.navigate('Mapa', { titulo: "Estação Imbui - Salvador", image: EstImbui, link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1145065247656!2d-38.43843128517802!3d-12.964523990860556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a5a34164b77%3A0x957556dc3d44224d!2zRXN0YcOnw6NvIEltYnXDrQ!5e0!3m2!1spt-BR!2sbr!4v1673443794833!5m2!1spt-BR!2sbr"})}}/>
        </View >
        <View style={styles.margin}>

        <Bicicletarios  vagas ={campoDaPolvora} text="Estação Campo da Polvora - Salvador" image={EstCampoDaPolvora}/>
        <Button title="Localizar" onPress={ ()=> {props.navigation.navigate('Mapa', { titulo: "Estação Campo da Polvora", image: EstCampoDaPolvora, link:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.888518062553!2d-38.50992588517787!3d-12.978981590851062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604ea23ba4381%3A0xb5b6261ad3dc0c98!2sCampo%20da%20P%C3%B3lvora!5e0!3m2!1spt-BR!2sbr!4v1673443650445!5m2!1spt-BR!2sbr"})}}/>

        </View >
        <View style={styles.margin}>
        <Bicicletarios vagas ={ribeira} text="Bicicletario Orla da Ribeira - Salvador" image={SsaDeBike}/>
        <Button title="Localizar" onPress={ ()=> {props.navigation.navigate('Mapa', { titulo: "Bicicletario Orla da Ribeira - Salvador", image: SsaDeBike, link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31111.4670679923!2d-38.52761008437501!3d-12.912003100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160f3fc9edbf77%3A0xe523c777416d63ac!2sBiciclet%C3%A1rio%20da%20Ribeira!5e0!3m2!1spt-BR!2sbr!4v1673443723535!5m2!1spt-BR!2sbr"})}}/>

            </View >
            </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  vTittle:{
    backgroundColor: 'white',
  },
  tittle:{
    fontFamily: 'sans-serif',
    color:'black',
    fontWeight: 'bold',
    fontSize: 30,
   textAlign:'center'
  },
  margin: { 
   paddingTop: 10,
   

  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  view1: {
    marginTop:20,
  },

});
