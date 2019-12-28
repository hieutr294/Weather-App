import React from 'react'
import {View,Image,StyleSheet,Text} from 'react-native'
import {Grid,Col, Row} from 'native-base'
import moment from 'moment'

import thermometer from '../assets/thermometer.png'
import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
import uv from '../assets/uv.png'

export default class CurrentWeather extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {data,uvi} = this.props
        let sunriseTime = moment(data.sys.sunrise*1000)
        let sunsetTime = moment(data.sys.sunset*1000)
        let colors = ''
        if(uvi>=0&&uvi<=2.9){
            colors='#2ecc71'
        }
        else if(uvi>=8.0&&uvi<=10.9){
            colors='#e74c3c'
        }
        else if(uvi>=3.0&&uvi<=5.9){
            colors='#f1c40f'
        }
        else if(uvi>=6.0&&uvi<=7.9){
            colors='#e67e22'
        }
        else if(uvi>=11.0){
            colors='#8e44ad'
        }
        return(
            <View style={{alignItems:'center'}}>
                <Text style={styles.header}>{`${data.name} Hiện Tại`}</Text>
                <Text style={styles.header}>{`${moment(data.dt*1000).format('DD/MM/YYYY')}`}</Text>

                <View style={styles.container}>
                    <Grid>
                        <Col>
                            <Row>
                                <Image style={styles.img} source={thermometer}/>
                                <Text style={styles.textContent}>{`${data.main.temp}°C`}</Text>
                            </Row>
                            <Row>
                                <Image style={styles.img} source={sunrise}/>
                                <Text style={styles.textContent}>{`${sunriseTime.format("hh:mm A")}`}</Text>
                            </Row>
                            <Row>
                                <Image style={styles.img} source={sunset}/>
                                <Text style={styles.textContent}>{`${sunsetTime.format("hh:mm A")}`}</Text>
                            </Row>
                        </Col>   

                        <Col>
                            <Row>
                                <Image style={styles.img} source={humidity}/>
                                <Text style={styles.textContent}>{`${data.main.humidity}%`}</Text>
                            </Row>
                            <Row>
                                <Image style={styles.img} source={wind}/>
                                <Text style={styles.textContent}>{`${data.wind.speed} m/s`}</Text>
                            </Row>
                            <Row>
                                <Image style={styles.img} source={uv}/>
                                <Text style={{fontSize:20,marginLeft:10,color:colors}}>{`${uvi}`}</Text>
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
        fontSize:20,
        marginLeft:10,
    }
})