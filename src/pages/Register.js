import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Login(props) {
    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
  
    const cadastro = () =>{
        alert('Usuario registrado');
    }
  
    return (
      <LinearGradient style={styles.container} colors={["#87CEEB", "#4682B4" ]}>        
        <Text style={styles.cadastro}>Registre-se</Text>
        <TextInput placeholder="Digite seu nome:" style={styles.textInput} onChangeText={text=>setNome(text)}></TextInput>
        <TextInput placeholder="Digite seu email:" style={styles.textInput} onChangeText={text=>setEmail(text)}></TextInput>
        <TextInput  secureTextEntry={true} placeholder="Digite sua senha:" style={styles.textInput} onChangeText={text=>setSenha(text)}></TextInput>
  
        <TouchableOpacity style={styles.btnCadastro}  onPress={()=> cadastro()}>
          <Text style={{color: 'white', textAlign:'center'}}>Cadastrar</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.btnVoltar}
          title="Voltar"
          onPress = { ()=> {props.navigation.navigate('Home')}}>
          <Text style={{color: 'white', textAlign:'center'}}>Voltar</Text>
        </TouchableOpacity >
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: '#5880218',
     alignItems:'center',
     justifyContent:'center'
     
    },
    textInput:{
      width:'80%',
      height:40,
      backgroundColor:'white',
      //para colocar a barra mais arrendodada
      borderRadius:20,
      //para colocar o aliamento da barra 
      paddingLeft:10,
      //a margem entre a barra e o nome cadastro
      marginTop:10,
      marginBottom:5
    },
    btnCadastro: {
      width:'50%',
      height:40,
      backgroundColor:'#000000',
      borderRadius:20,
      justifyContent:'center',
      marginTop:5
    },
    btnVoltar: {
      width:'30%',
      height:40,
      backgroundColor:'#363636',
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
