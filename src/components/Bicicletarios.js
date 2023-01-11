import React from 'react'
import { Text,View,Button,Image, StyleSheet} from 'react-native'



export default function Bicicletarios(props) {
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <Text style={styles.text1}>Vagas:{props.vagas} </Text>
            <Image style={styles.image} source={props.image}/>
          
        </View>
    )
}


const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#1E90FF',
      },
      text:{
        color:'white',
        fontSize:20
      },   
         text1:{
        color:'white',
        fontSize:15
      },
    image: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: 400,
        height:200
    },

})