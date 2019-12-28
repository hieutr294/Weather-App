import React from 'react'
import { View,Dimensions,StyleSheet} from "react-native";

import axios from 'axios'
navigator.geolocation = require('@react-native-community/geolocation');
import CurrentWeather from '../components/CurrentWeather';

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height;

export default class HomePage extends React.Component{
    static navigationOptions = {
        title:'Trang Chủ',
        headerStyle: {
            backgroundColor: '#2ecc71',
        }
    }

    constructor(props) {
        super(props);
        this.state = {
          current:[],
          location:{coords:{latitude:'',longitude:''}},
          uv:null
        }
    }

    getUvData(pos){
        var currentUrl = `http://api.openweathermap.org/data/2.5/uvi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=391528de4ad7f3ad43c7964a2bf118bd`
        
        axios.get(currentUrl)
        .then(res=>{
            this.setState({
                uv:res.data.value
            })
        })
        .catch(err=>{
            this.setState({
            current:['error']
            })
        })
        console.log('uv call')
    }

    getWeatherData(pos){
        var currentUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=391528de4ad7f3ad43c7964a2bf118bd`
        
        axios.get(currentUrl)
        .then(res=>{
            this.setState({
            current:[res.data]
            })
        })
        .catch(err=>{
            this.setState({
            current:['error']
            })
        })
        console.log('weather call')
    }
    
    componentDidMount() {

        navigator.geolocation.getCurrentPosition(pos=>{
            this.setState({
                location:{coords:{latitude:pos.coords.latitude,longitude:pos.coords.longitude}}
            })
            this.getUvData(pos)
            this.getWeatherData(pos)
        })
    }

    render(){
        const { current,uv} = this.state
        return(
            <View style={styles.container}>
                {
                    current.map((item,index)=><CurrentWeather key={index} data={item} uvi={uv}/>)
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:width,
        height:height-130,
        backgroundColor:'#2ecc71'
    }
})
