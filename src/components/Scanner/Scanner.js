import React, {useState, useEffect} from 'react';
import { Camera, CameraType} from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';


export default function Scanner(){

  const [type, setType] = useState(CameraType.back);
  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Você precisa conceder permissão a camera</Text>
        <Button onPress={requestPermission} title="Conceder Permissão" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  function limpar (){
   alert('ok')
  }
  const handleBarCodeScanned = ({type, data}) =>{
    alert(`${type}, ${data}, ${scanned} `);
    return setScanned(true)
  
    
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}  barCodeScannerSettings={{
        barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],}}onBarCodeScanned={scanned ? limpar : handleBarCodeScanned}>
       
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Girar Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
});
