import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

function WeatherWidget(){
    return(
        <View style={{width:100,height:150,borderRadius:5,borderWidth:1,borderColor:'#d8dfe9'}}>
            <Text style={{textAlign:'center'}}>Tue</Text>
            <Image style={{width:100,height:100}} source={require('./icon.png')}/>
            <Text style={{textAlign:'center'}}>10-21</Text>
        </View>
    )
}

export default WeatherWidget;