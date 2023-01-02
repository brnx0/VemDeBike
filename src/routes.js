import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Menu from './pages/Menu'
import LeitorQr from './pages/LeitorQr'
import Scanner from './components/Scanner/Scanner'

const Stack= createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen name="LeitorQr" component={LeitorQr}/>
                <Stack.Screen name="Scanner" component={Scanner}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}