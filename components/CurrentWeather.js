import React from 'react'
import {View,Image,StyleSheet,Text} from 'react-native'
import {Grid,Col, Row} from 'native-base'
import thermometer from '../assets/thermometer.png'
import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'

export default class CurrentWeather extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {data} = this.props
        let sunriseTime = new Date(data.sys.sunrise*1000)
        let sunsetTime = new Date(data.sys.sunset*1000)
        return(
            <View style={{alignItems:'center'}}>
                <Text style={styles.header}>{`${data.name} Hiện Tại`}</Text>
                <View style={styles.container}>
                    <Grid>
                        <Col>
                            <Row>
                                <Image style={styles.img} source={thermometer}/>
                                <Text style={styles.textContent}>{`   ${data.main.temp}°C`}</Text>
                            </Row>
                            <Row>
                                <Image style={styles.img} source={sunrise}/>
                                <Text style={styles.textContent}>{`   ${sunriseTime.getHours()} : ${sunriseTime.getMinutes()}`}</Text>
                            </Row>
                            <Row>
                                <Image style={styles.img} source={sunset}/>
                                <Text style={styles.textContent}>{`   ${sunsetTime.getHours()} : ${sunsetTime.getMinutes()}`}</Text>
                            </Row>
                        </Col>   

                        <Col>
                            <Row>
                                <Image style={styles.img} source={humidity}/>
                                <Text style={styles.textContent}>{`   ${data.main.humidity}%`}</Text>
                            </Row>
                            <Row>
                                <Image style={styles.img} source={wind}/>
                                <Text style={styles.textContent}>{`  ${data.wind.speed} m/s`}</Text>
                            </Row>
                        </Col>
                    </Grid>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        width:350,
        height:120,
        borderRadius:10,
        elevation:20,
        paddingTop:10,
        paddingHorizontal:10,
        backgroundColor:'#fff'
    },
    child:{
        flexDirection:'row',
    },
    img:{
        width:32,
        height:32
    },
    header:{
        fontSize:30,
        marginBottom:10
    },
    textContent:{
        fontSize:20
    }
})