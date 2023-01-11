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
   source={{html: `<iframe src=${route.params?.link} width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}}
   style={styles.mapa} 
>
  {/* <TouchableOpacity onPress> AINDA FALTA FINALIZAR ISSO AQUI,

  </TouchableOpacity> */}
</WebView> 
        <View>
          <Text></Text>
        </View>
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
    padding:20,
    
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
    
  },
  mapa:{
    flex:1,
    marginTop: 20, 
    height:60, 
    width:800,

  }


});
