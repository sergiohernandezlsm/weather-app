import React, { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import currentDayJson from "../../services/currentDay.json";

export interface WeatherInterface {
  city_name: string;
  clouds: number;
  weather: {
    code: number;
    description: string;
    icon: string;
  };
}

const ExtendedWeather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherInterface>();
  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    const trigger = false;
    if (trigger) {
      const options: AxiosRequestConfig = {
        method: "GET",
        url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily",
        params: { lat: "51.509865", lon: "-0.118092" },
        headers: {
          "x-rapidapi-key":
            "c95c9b227bmsh69e4517c1270c5ep16782ajsnba6c778e0aff",
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then((response: AxiosResponse) => {
          setWeather(response.data.data[0]);
          console.log("inside extended ==> ", response.data.data[0]);
        })
        .catch((error) => {
          setWeather(error.message);
        });
    } else {
      console.log("outside extended ==> ", currentDayJson);
      setWeather(currentDayJson);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card className="text-center">
              {/* <Card.Header>
                <h1>Location extende: {JSON.stringify(weather?.city_name)}</h1>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  description: {JSON.stringify(weather?.weather.description)}
                </Card.Title>
                <Card.Text>
                  icon: {JSON.stringify(weather?.weather.icon)}
                </Card.Text>
                <Card.Text>
                  code: {JSON.stringify(weather?.weather.code)}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                clouds: {JSON.stringify(weather?.clouds)}
              </Card.Footer> */}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExtendedWeather;
