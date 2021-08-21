import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, View, Text} from 'react-native';
import Content from './Content';
import Loading from './Loading'
import Geolocation from 'react-native-geolocation-service';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [forecast, setForeCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function checkPermision() {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then(() => {
      Geolocation.getCurrentPosition(
        pos => {
          // setLatLon({lat: pos.coords.latitude, lon: pos.coords.longitude});
          getdata(pos.coords.latitude, pos.coords.longitude);
        },
        err => {
          getdata(21.027763, 105.83416);
        },
        {enableHighAccuracy: true},
      );
    });
  }

  async function getdata(lat, lon) {
    setIsLoading(true);
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=ea2fab5b56dd6f08bf961183e3db826b`,
    ).then(res =>
      res.json().then(data => {
        setWeatherData(data);
      }),
    );
    await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=ea2fab5b56dd6f08bf961183e3db826b`,
    ).then(res =>
      res.json().then(data => {
        setForeCast(data);
      }),
    );
    setIsLoading(false);
  }

  useEffect(() => {
    try {
      checkPermision();
    } catch (e) {
      console.log('Error');
    }
  }, []);

  if (isLoading) {
    return (
      <Loading/>
    );
  } else {
    return <Content weatherData={weatherData} forecast={forecast.daily} />;
  }
}

export default App;
