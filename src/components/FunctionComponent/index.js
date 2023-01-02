import React from 'react'
import {Text, View} from 'react-native'

export default function FunctionComponent(props){
    return(
        <View>
            <Text> FunctionComponent {props.name}</Text>
        </View>
    )
}