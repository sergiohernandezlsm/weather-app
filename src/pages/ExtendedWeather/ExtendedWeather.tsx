import React, { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import css from "./ExtendedWeather.module.scss";
import extendedDay from "../../services/extendedDay.json";
import { WeatherInterface } from "../../types";
import { useFetchCitiesQuery } from "../../features/cities/citiesApi";

const ExtendedWeather: React.FC = () => {
  const { data, isFetching } = useFetchCitiesQuery();

  console.log("other page => ", data);

  // const [weather, setWeather] = useState<WeatherInterface[]>([]);
  // useEffect(() => {
  //   getWeather();
  // }, []);

  // const getWeather = () => {
  //   const trigger = false;
  //   const cities = [
  //     { id: 6058560, city: "london" },
  //     { id: 5039192, city: "newYork" },
  //     { id: 1275339, city: "mumbai" },
  //     { id: 6354908, city: "sydney" },
  //     { id: 1850147, city: "tokyo" },
  //   ];

  //   const arrayOfCities: any[] = [];
  //   if (trigger) {
  //     cities.forEach((city) => {
  //       const options: AxiosRequestConfig = {
  //         method: "GET",
  //         url: `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?city_id=${city.id}`,
  //         headers: {
  //           "x-rapidapi-key":
  //             "d020a1a868msh122b0400486fed8p149608jsnb58949d60151",
  //           "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
  //         },
  //       };
  //       axios
  //         .request(options)
  //         .then((response: AxiosResponse) => {
  //           console.log("0");
  //           arrayOfCities.push(response.data);
  //           // console.log("inside extended ==> ", response.data);
  //         })
  //         .catch((error) => {
  //           setWeather(error.message);
  //         });
  //     });
  //     console.log("1");
  //     setWeather(arrayOfCities);
  //     console.log("2");
  //   } else {
  //     console.log("outside extended ==> ", extendedDay);
  //     setWeather(extendedDay);
  //   }
  // };

  // console.log("weather ===> ", weather);

  return (
    <div>
      <Container>
        {/* <Row>
          <Col>
            <Card>
              {weather.map((city, index) => {
                return (
                  <Card key={`key-${index}`} className="text-center">
                    <Card.Header>
                      <h3>Location: {JSON.stringify(city?.city_name)}</h3>
                    </Card.Header>
                    <Card.Body>
                      <Container>
                        <Row>
                          {city?.data.map((day, index) => {
                            return (
                              <Col
                                key={`key-index-${index}`}
                                xs={12}
                                md={3}
                                className={css.cardStyle}
                              >
                                <div className={css.cardWrapper}>
                                  <Card.Title>Day: {day.datetime}</Card.Title>
                                  <p>Temperature: {day.temp}</p>
                                  <p>
                                    Precipitation: {day.weather.description}
                                  </p>
                                  <p>
                                    Wind: {day.wind_dir} {day.wind_cdir}
                                  </p>
                                </div>
                              </Col>
                            );
                          })}
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                );
              })}
            </Card>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default ExtendedWeather;
