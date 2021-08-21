import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import WeatherWidget from './WeatherWidget';
import img from './imageManager';
let moment = require('moment');
require('moment/locale/en-au');

function Content({weatherData, forecast}) {
  const renderItem = ({item}) => {
    return (
      <WeatherWidget
        temp={item.temp.day}
        dt={item.dt}
        icon={item.weather[0].icon}
      />
    );
  };
  function converUnixTime(UNIX_timestamp) {
    let time = moment.unix(UNIX_timestamp);
    return {date: time.format('LL'), time: time.format('LT')};
  }
  function captialize(text) {
    let a = text.split(' ');
    for (let i = 0; i < a.length; i++) {
      a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    return a.join(' ');
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.location}>{weatherData.name}</Text>
        <Text style={styles.date}>{converUnixTime(weatherData.dt).date}</Text>
        <View style={styles.today}>
          <View>
            <Image
              style={styles.image}
              source={img[weatherData.weather[0].icon]}
            />
          </View>
          <View style={styles.weatherInfo}>
            <Text style={styles.temp}>{`${Math.round(
              weatherData.main.temp,
            )}°C`}</Text>
            <Text style={styles.description}>
              {captialize(weatherData.weather[0].description)}
            </Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.details}>
          <View style={styles.details1}>
            <View>
              <Text style={styles.text}>{`${Math.round(
                weatherData.main.temp_max,
              )}°`}</Text>
              <Text>High</Text>
            </View>
            <View style={{marginLeft: 40}}>
              <Text style={styles.text}>{`${weatherData.wind.speed} m/s`}</Text>
              <Text>Wind</Text>
            </View>
            <View style={{marginLeft: 25}}>
              <Text style={styles.text}>
                {converUnixTime(weatherData.sys.sunrise).time}
              </Text>
              <Text>Sunrise</Text>
            </View>
          </View>
          <View style={styles.details2}>
            <View>
              <Text style={styles.text}>{`${Math.round(
                weatherData.main.temp_min,
              )}°`}</Text>
              <Text>Low</Text>
            </View>
            <View style={{marginLeft: 40}}>
              <Text style={styles.text}>{`${weatherData.main.humidity}%`}</Text>
              <Text>Humidity</Text>
            </View>
            <View style={{marginLeft: 50}}>
              <Text style={styles.text}>
                {converUnixTime(weatherData.sys.sunset).time}
              </Text>
              <Text>Sunset</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={{marginTop: 20}}>
          <Text style={{marginBottom: 15, fontSize: 15}}>Forecast</Text>
          <View>
            <FlatList
              data={forecast}
              renderItem={renderItem}
              horizontal={true}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  location: {
    fontSize: 40,
    fontFamily: 'lato',
    color: 'black',
  },
  date: {
    fontSize: 20,
    color: 'black',
  },
  container: {
    height: '100%',
    margin: 0,
    width: '100%',
    backgroundColor: '#ECF3F9',
  },
  content: {
    backgroundColor: '#ECF3F9',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  today: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  temp: {
    fontSize: 60,
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#d8dfe9',
  },
  text: {
    fontSize: 20,
  },
  weatherInfo: {
    backgroundColor: '#ECF3F9',
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    display: 'flex',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  details1: {
    display: 'flex',
    flexDirection: 'row',
  },
  details2: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default Content;
