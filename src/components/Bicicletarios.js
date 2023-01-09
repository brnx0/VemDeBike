import React from 'react'
import { Text,View,Button,Image, StyleSheet} from 'react-native'



export default function Bicicletarios(props) {
    
    return(
        <View style={styles.container}>
            <Text>Vagas:{props.vagas} </Text>
            <Text>{props.text}</Text>
            <Image style={styles.image} source={props.image}/>
          
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
      },
    image: {
        width:400,
        height:200
    }
})