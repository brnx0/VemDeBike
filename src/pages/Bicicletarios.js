import React from 'react'
import { Text,View,Button,Image, StyleSheet} from 'react-native'

export default function Bicicletarios(props) {
    let vagas = 10
    return(
        <View>
            <Text>Vagas:{vagas} </Text>
            <Text>{props.text}</Text>
            <Image style={styles.image} source={props.image}/>
        </View>
    )
}

const styles=StyleSheet.create({
    image: {
        width:200,
        height:200
    }
})