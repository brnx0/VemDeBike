import React, {useEffect, useState} from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { View, Text, StyleSheet} from 'react-native';



export default function Scanner(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(()=>{
        (async ()=>{
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission (status === 'granted');
            
        })();
        
        
    },[] );

    const handleBarCodeScanned = ({type, data}) =>{
        setScanned(true);
        alert(`${type}, ${data} `);
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
       <View>
        <BarCodeScanner  onBarCodeScanned={scanned ? undefined: handleBarCodeScanned}/>
       </View>
        
             
       
       

    );
   
    

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center'
    }
})