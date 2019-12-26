import React from 'react'
import {View,StyleSheet,Text,ScrollView,Image} from 'react-native'
import {Grid,Col, Row} from 'native-base'
import thermometer from '../assets/thermometer.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'

export default class HeaderTitle extends React.Component{
    render(){
        const {data} = this.props
        return(
            <View style={styles.container}>
                <ScrollView style={{width:400}} contentContainerStyle={{alignItems:'center'}}>
                    <Text style={styles.header}>Dự báo 5 ngày tới</Text>
                    {
                        data.map(item=><View style={styles.child}>
                            <Grid>
                                <Col>
                                    <Row>
                                        <Text style={{paddingLeft:10,fontSize:16}}>{item.dt_txt}</Text>
                                    </Row>
                                    <Row>
                                        <Image style={styles.img} source={thermometer}/>
                                        <Text style={styles.textContent}>{`   ${item.main.temp}°C`}</Text>
                                    </Row>
                                </Col>   
                                <Col>
                                    <Row>
                                        <Image style={styles.img} source={humidity}/>
                                        <Text style={styles.textContent}>{`   ${item.main.humidity}%`}</Text>
                                    </Row>
                                    <Row>
                                        <Image style={styles.img} source={wind}/>
                                        <Text style={styles.textContent}>{`  ${item.wind.speed} m/s`}</Text>
                                    </Row>
                                </Col>
                            </Grid>
        
                        </View>)
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    child:{
        marginTop:20,
        width:350,
        height:100,
        borderRadius:10,
        elevation:5,
        backgroundColor:'#fff'
    },
    img:{
        width:32,
        height:32,
    },
    header:{
        paddingTop:10,
        fontSize:30,
        textAlign:'center'
    },
    textContent:{
        fontSize:20
    }
})