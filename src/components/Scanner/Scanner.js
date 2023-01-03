import React, {useState} from 'react';
import { Camera} from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { View, Text, StyleSheet, Button} from 'react-native';
import {  } from 'react-native-web';

export default function Scanner(){

  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (permission === null) {
      return (
      <View>
        <Text>Requesting for camera permission</Text>
        <Button onPress={requestPermission} title="Conceder permissão"/>
      </View>
      )
  };

  if (permission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
        <Button onPress={requestPermission} title="Conceder permissão"/>
      </View>
    )
  };
  
 const handleBarCodeScanned = ({type, data}) =>{
    alert(`${type}, ${data} `);
    return setScanned(false);
  }

      
  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera} 
        barCodeScannerSettings={{
        barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],}}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}>
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