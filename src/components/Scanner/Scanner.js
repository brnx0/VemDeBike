import React, {useState} from 'react';
import { Camera} from 'expo-camera';

import { View,  StyleSheet,} from 'react-native';


export default function Scanner(){

  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  if (hasPermission === null) {
    setHasPermission ('granted');
   }
     
     
  
  if (hasPermission === false) {
    setHasPermission ('granted');
  };
  
 const handleBarCodeScanned = ({type, data}) =>{
    alert(`${type}, ${data} `);
    return setScanned(false);
  };

      
  return (
    <View style={styles.container}>
      <Camera>
  
      </Camera>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center'
  }, 
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
})