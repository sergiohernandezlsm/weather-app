import React, { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import currentDayJson from '../services/currentDay.json';

export interface WeatherInterface {
  city_name: string;
  clouds: number;
  weather: {
    code: number;
    description: string;
    icon: string;
  }
}

const CurrentWeather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherInterface>();
  useEffect(() => {
    getWeather();
  }, [])

  const getWeather = () => {
    const trigger = false;
      if (trigger) {
        const options: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
        params: {lon: '-0.118092', lat: '51.509865'},
        headers: {
          'x-rapidapi-key': 'c95c9b227bmsh69e4517c1270c5ep16782ajsnba6c778e0aff',
          'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
      };
    axios.request(options).then((response: AxiosResponse) => {
      setWeather(response.data.data[0]);
      console.log('inside ==> ', response.data.data[0])
    }).catch((error) => {
      setWeather(error.message);
    });
  } else {
      console.log('outside ==> ', currentDayJson)
      setWeather(currentDayJson);
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 style={{textAlign: 'left'}}>Location: {JSON.stringify(weather?.city_name)}</h1>
            <p style={{textAlign: 'left'}}>description: {JSON.stringify(weather?.weather.description)}</p>
            <p style={{textAlign: 'left'}}>icon: {JSON.stringify(weather?.weather.icon)}</p>
            <p style={{textAlign: 'left'}}>code: {JSON.stringify(weather?.weather.code)}</p>
            <p style={{textAlign: 'left'}}>clouds: {JSON.stringify(weather?.clouds)}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CurrentWeather;