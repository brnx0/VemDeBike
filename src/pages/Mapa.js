import React from 'react'
import { WebView } from 'react-native-webview';

import { StatusBar } from 'expo-status-bar';
import {ImageBackground ,Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-web';





export default function LeitorQr({route} ) {
  const navigation = useNavigation();
  return (
    
    <ImageBackground source={route.params?.image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
         
        <Text style={styles.titulo}>{route.params?.titulo}</Text>
        <WebView   // Mapa
   source={{html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.958333128357!2d-38.51368447144165!3d-12.982509679527663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61ce2f34156ffe28!2zRXN0YcOnw6NvIE5vdmEgTGFwYQ!5e0!3m2!1spt-BR!2sbr!4v1673358939191!5m2!1spt-BR!2sbr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'}}
   style={{marginTop: 20, height:600, width:800}} 
>
  {/* <TouchableOpacity onPress> AINDA FALTA FINALIZAR ISSO AQUI, PRA ABRIR O MAPA 

  </TouchableOpacity> */}
</WebView> 
        <View style={styles.botao}>
         
          <Button title="Usar bicicletario" onPress={ ()=> {navigation.navigate('Scanner')}}/>
        </View>
        
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  botao:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignleft:40,
    padding:20
    
  },
  titulo:{
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,

    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    
    textAlignVertical: 'center',
    
    fontSize: 20,
    fontWeight: 'bold'
    
  }


});
