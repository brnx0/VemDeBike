import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';


export default function Login(props) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const cadastro = () =>{
        try {
            if(email=='teste@gmail.com')
            alert('funcionando');
        } catch (error) {
            alert('Usuario invalido', error)
        }
    }
  return (


    <View style={styles.container}>
        
    <Text style={styles.cadastro}>Fazer Login</Text>
      
      <TextInput placeholder="Digite seu email:" style={styles.textInput} onChangeText={text=>setEmail(text)}></TextInput>
      <TextInput  secureTextEntry={true} placeholder="Digite sua senha:" style={styles.textInput} onChangeText={text=>setSenha(text)}></TextInput>
  
      <TouchableOpacity style={styles.btnCadastro}  onPress={()=> cadastro()}>
        <Text style={{color: 'white', textAlign:'center'}}>ENTRAR</Text>
      </TouchableOpacity>
        <Button
        title="Voltar"
        onPress = { ()=> {props.navigation.navigate('Home')}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6495ED',
      alignleft:40,
      padding:20
      
    },
    textInput:{
      width:'100%',
      height:40,
      backgroundColor:'white',
      //para colocar a barra mais arrendodada
      borderRadius:20,
      //para colocar o alinhamento da barra 
      paddingLeft:10,
      //a margem entre a barra e o nome cadastro
      marginTop:10,
      marginBottom:5
    },
    btnCadastro: {
      width:'100%',
      height:40,
      backgroundColor:'#000000',
      borderRadius:20,
      justifyContent:'center',
      marginTop:5
    },
    cadastro: {
      fontSize:40,
      marginLeft:5,
      justifyContent:'center',
      textAlign:'center'
    }
  });
