import React, { useState } from "react";
import { useFetchCitiesQuery } from "../../features/cities/citiesApi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import css from "./ExtendedWeather.module.scss";
import ExtendedWeather2 from "../../services/extendedDay.json";
import { useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { ExtendedWeatherTypes } from "../../types";

const ExtendedWeather: React.FC = () => {
  const cities = [
    { id: 6058560, city: "london" },
    { id: 5128581, city: "newYork" },
    { id: 1275339, city: "mumbai" },
    { id: 6354908, city: "sydney" },
    { id: 1850147, city: "tokyo" },
  ];

  // const { data: london } = useFetchCitiesQuery(cities[0].id);
  // const { data: newYork } = useFetchCitiesQuery(cities[1].id);
  // const { data: mumbai } = useFetchCitiesQuery(cities[2].id);
  // const { data: sydney } = useFetchCitiesQuery(cities[3].id);
  // const { data: tokyo } = useFetchCitiesQuery(cities[4].id);
  const [calNumber, setCalNumber] = useState(0);
  const [weatherCards, setWeatherCards] = useState<any>(ExtendedWeather2);

  const handleChange = (e: any) => {
    setCalNumber(e.target.value);
  };

  const minTemperature = (calNumber: number, index: number) => {
    let filtered;
    if (weatherCards === ExtendedWeather2) {
      filtered = weatherCards.map((x: any, i: number) => {
        if (index === i) {
          const { data, ...restData } = x;
          const newArray = data.filter((day: any) => day.min_temp >= calNumber);
          return { ...restData, data: [...newArray] };
        } else {
          return x;
        }
      });
    } else {
      filtered = ExtendedWeather2.map((x: any, i: number) => {
        if (index === i) {
          const { data, ...restData } = x;
          const newArray = data.filter((day: any) => day.min_temp >= calNumber);
          return { ...restData, data: [...newArray] };
        } else {
          return x;
        }
      });
    }

    setWeatherCards(filtered);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              {weatherCards.map((city: any, index: any) => {
                return (
                  <Card key={`key-${index}`} className="text-center">
                    <Form inline>
                      <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={handleChange}
                      />
                      <Button
                        onClick={() => minTemperature(calNumber, index)}
                        variant="outline-success"
                      >
                        Filter
                      </Button>
                    </Form>
                    <Card.Header>
                      <h2>{city?.city_name}</h2>
                    </Card.Header>
                    <Card.Body>
                      <Container>
                        <Row>
                          {city?.data.map((day: any, index: any) => {
                            return (
                              <Col
                                key={`key-index-${index}`}
                                xs={12}
                                md={3}
                                className={css.cardStyle}
                              >
                                <div className={css.cardWrapper}>
                                  <Card.Title>Day: {day.datetime}</Card.Title>
                                  <h4>Value: {day.min_temp}</h4>
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
        </Row>
      </Container>
    </div>
  );
};

export default ExtendedWeather;
