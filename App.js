import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import WeatherWidget from './WeatherWidget';

function App(){
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.location}>LonDon, Uk</Text>
        <Text style={styles.date}>Monday 29 August</Text>
        <View style={styles.today}>
          <View>
            <Image style={styles.image} source={require('./icon.png')}/>
          </View>
          <View style={{backgroundColor:"#ECF3F9",width:140,justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.temp}>21°</Text>
            <Text style={styles.info}>Mostly Sunny</Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={{display:'flex',marginLeft:40,marginRight:40,marginTop:15,marginBottom:15}}>
          <View style={{display:'flex',flexDirection:'row'}}>
            <View>
              <Text style={styles.text}>23</Text>
              <Text>High</Text>
            </View>
            <View style={{marginLeft:70}}>
              <Text style={styles.text}>7mph</Text>
              <Text>Wind</Text>
            </View>
            <View style={{marginLeft:70}}>
              <Text style={styles.text}>05:27</Text>
              <Text>Sunrise</Text>
            </View>
          </View>
          <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
            <View>
              <Text style={styles.text}>14</Text>
              <Text>Low</Text>
            </View>
            <View style={{marginLeft:70}}>
              <Text style={styles.text}>0%</Text>
              <Text>Rain</Text>
            </View>
            <View style={{marginLeft:100}}>
              <Text style={styles.text}>20:57</Text>
              <Text>Sunrise</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={{marginTop:20}}>
          <Text style={{marginBottom:15,fontSize:15}}>Next 3 days</Text>
          <View style={{display:'flex',flexDirection:'row'}}>
            <WeatherWidget/>
            <View style={{marginLeft:20}}>
              <WeatherWidget/>
            </View>
            <View style={{marginLeft:20}}>
              <WeatherWidget/>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  location:{
    fontSize:40,
    fontFamily:'lato',
    color:'black'
  },
  date:{
    fontSize:20,
    color:'black'
  },
  container: {
    height:'100%',
    margin:0,
    width:'100%',
    backgroundColor:"#ECF3F9"
  },
  content:{
    backgroundColor:"#ECF3F9",
    marginLeft:10,
    marginRight:10,
    marginTop:20,
  },
  image:{
    width:200,
    height:200,
    borderWidth:2,
  },
  today:{
    display:'flex',
    flexDirection:'row',
    
  },
  temp:{
    textAlign:'center',
    fontSize:70,
  },
  info:{
    textAlign:'center',
    fontSize:20
  },
  divider:{
    borderBottomWidth:1,
    borderBottomColor:'#d8dfe9'
  },
  text:{
    fontSize:20
  }
});

export default App;
