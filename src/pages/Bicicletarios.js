import React from 'react'
import { Text,View,Button,Image, StyleSheet} from 'react-native'

var Dimensions = require('Dimensions');
var {
  width,
  height
} = Dimensions.get('window');


export default function Bicicletarios(props) {

    return(
        <View style={styles.container}>
            <Text>Vagas:{vagas} </Text>
            <Text>{props.text}</Text>
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

      },
    image: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: 100,
        height:300
    }
})