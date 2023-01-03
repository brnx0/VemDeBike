import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Bicicletarios from '../components/Bicicletarios';
import EstImbui from '../../assets/images/foto-manu-dias-govenro-da-bahia-1.jpeg'
import EstCampoDaPolvora from '../../assets/images/Estação_Campo_da_Pólvora_-_01-1.jpeg'
import EstPernambues from '../../assets/images/Estação_Pernambués_-_09-1.jpeg'
import { ScrollView } from 'react-native';


export default function Menu(props) {
  return (

    <ScrollView>
        <View>
        <Bicicletarios text="Estação Pernambues - Salvador" image={EstPernambues}/>
        </View>
        <View>
        <Bicicletarios text="Estação Imbui - Salvador" image={EstImbui}/>
        </View>
        <View>
        <Bicicletarios text="Estação Campo da Polvora - Salvador" image={EstCampoDaPolvora}/>
        <Button title="Toque" onPress = { ()=> {props.navigation.navigate('Scanner')}}> </Button>
        
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
