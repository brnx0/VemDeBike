import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View,ImageBackground, Pressable } from 'react-native';
import Bike from '../../assets/images/bike.jpeg'
import { useEffect } from 'react';


 function Home(props) {

 
   
  return (
   
    <View className="w-full h-full z-2">
      
           
    <ImageBackground source={Bike} className="w-full h-full z-3"/>
   
    
     
     <View className="flex-1 flex-wrap self-center justify-end space-x-5   " >
         <Pressable   onPress = { ()=> {props.navigation.navigate('Menu')}} className=" self-center justify-center border-solid border-2 w-32 h-14 bg-white border-black rounded-md  mb-2 ">
             <Text className="text-center">Login</Text>
         </Pressable>
         <Pressable   onPress = { ()=> {props.navigation.navigate('Register')}} className="items-center justify-center border-solid border-1 w-32 h-14 bg-black rounded-md border-white mb-2  ">
             <Text className="text-white	">Cadastrar</Text>
         </Pressable>
         
     </View>

 </View>

)

}export default Home;

