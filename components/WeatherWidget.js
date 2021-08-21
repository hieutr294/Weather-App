import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import img from './imageManager';
var moment = require('moment');
require('moment/locale/en-au');

function WeatherWidget({temp, dt, icon}) {
  var weekDay = moment.unix(dt).format('dddd');
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>{weekDay}</Text>
      <Image style={{width: 70, height: 70}} source={img[icon]} />
      <Text style={{textAlign: 'center'}}>{`${Math.round(temp)}° C`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 150,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d8dfe9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
});
export default WeatherWidget;
