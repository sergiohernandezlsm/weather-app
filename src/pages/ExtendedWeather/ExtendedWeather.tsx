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
import { ExtendedWeatherTypes, Days } from "../../types";
import { calFunc, calByMaxTemp } from "./helpers";

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
  const [calculatorNumber, setCalculatorNumber] = useState(0);

  const [weatherCards, setWeatherCards] =
    useState<ExtendedWeatherTypes[]>(ExtendedWeather2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCalculatorNumber(+e.target.value);
  };

  const minTemperature = (index: number) => {
    if (weatherCards === ExtendedWeather2) {
      setWeatherCards(calFunc(weatherCards, calculatorNumber, index));
    } else {
      setWeatherCards(calFunc(ExtendedWeather2, calculatorNumber, index));
    }
  };
  const maxTemperature = (index: number) => {
    if (weatherCards === ExtendedWeather2) {
      setWeatherCards(calByMaxTemp(weatherCards, calculatorNumber, index));
    } else {
      setWeatherCards(calByMaxTemp(weatherCards, calculatorNumber, index));
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              {weatherCards.map((city: ExtendedWeatherTypes, index: number) => {
                return (
                  <Card key={`key-${index}`} className="text-center">
                    <Form inline>
                      <p>
                        Filter by <b>min</b> temperature
                      </p>
                      <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={handleChange}
                      />
                      <Button
                        onClick={() => minTemperature(index)}
                        variant="outline-success"
                      >
                        Filter
                      </Button>
                    </Form>
                    <Form inline>
                      <p>
                        Filter by <b>max</b> temperature
                      </p>
                      <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={handleChange}
                      />
                      <Button
                        onClick={() => maxTemperature(index)}
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
                          {city?.data.map((day: Days, index: number) => {
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
