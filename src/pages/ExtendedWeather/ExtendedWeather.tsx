import React, { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import extendedDay from "../../services/extendedDay.json";

export interface WeatherInterface {
  city_name: string;
  country_code: string;
  data: [
    {
      weather: {
        code: number;
        description: string;
        icon: string;
      };
    }
  ];
}

const ExtendedWeather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherInterface[]>([]);
  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    const trigger = false;
    const cities = [
      { id: 6058560, city: "london" },
      { id: 5039192, city: "newYork" },
      { id: 1275339, city: "mumbai" },
      { id: 6354908, city: "sydney" },
      { id: 1850147, city: "tokyo" },
    ];

    const arrayOfCities: any[] = [];
    if (trigger) {
      cities.forEach((city) => {
        const options: AxiosRequestConfig = {
          method: "GET",
          url: `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?city_id=${city.id}`,
          headers: {
            "x-rapidapi-key":
              "c95c9b227bmsh69e4517c1270c5ep16782ajsnba6c778e0aff",
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
          },
        };
        axios
          .request(options)
          .then((response: AxiosResponse) => {
            arrayOfCities.push(response.data);
            // console.log("inside extended ==> ", response.data);
          })
          .catch((error) => {
            setWeather(error.message);
          });
      });
      setWeather(arrayOfCities);
    } else {
      console.log("outside extended ==> ", extendedDay);
      setWeather(extendedDay);
    }
  };

  console.log("weather ===> ", weather);

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
