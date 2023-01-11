import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View,ImageBackground, Pressable } from 'react-native';
import Bike from '../../assets/images/bike.jpeg'
import { useEffect } from 'react';


 function Home(props) {

 
   
  return (
   
    
    <ImageBackground source={Bike} className="w-full h-full z-3">
   
    <View className="flex-1 flex-col self-end text-7xl items-center drop-shadow-2xl p-10 shadow-red-900	 ">
    <Text className=" color-white text-7xl items-center mb-10 shadow-red-900	"> Vem  </Text> 
    <Text  className=" color-white text-7xl mb-10 shadow"> De </Text>    
    <Text  className=" color-white text-7xl self-center"> Bike </Text>   
    </View>
    
     
     <View className="flex-1  flex-row self-center justify-around items-end p-5   " >
         <Pressable   onPress = { ()=> {props.navigation.navigate('Login')}} className="m-5  justify-center border-solid border-2 w-32 h-14 bg-white border-black rounded-md  mb-2 ">
             <Text className="text-center">Login</Text>
         </Pressable>
         <Pressable   onPress = { ()=> {props.navigation.navigate('Register')}} className=" justify-center border-solid border-1 w-32 h-14 bg-black rounded-md border-white mb-2  ">
             <Text className="text-white text-center	">Cadastrar</Text>
         </Pressable>
         
     </View>
     </ImageBackground>


)

}export default Home;

