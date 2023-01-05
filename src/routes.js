import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Menu from './pages/Menu'
import LeitorQr from './pages/LeitorQr'
import Scanner from './components/Scanner/Scanner'
import Mapa from './pages/Mapa'
const Stack= createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
                <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
                <Stack.Screen name="LeitorQr" component={LeitorQr} options={{headerShown: false}} />
                <Stack.Screen name="Scanner" component={Scanner} options={{headerShown: false}} />
                <Stack.Screen name="Mapa" component={Mapa} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}