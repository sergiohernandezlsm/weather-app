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
import { ExtendedWeatherTypes, Days } from "../../types";
import { calByMinTemp, calByMaxTemp } from "./helpers";

const ExtendedWeather: React.FC = () => {
  const cities = [
    { id: 6058560, city: "london" },
    { id: 5128581, city: "newYork" },
    { id: 1275339, city: "mumbai" },
    { id: 6354908, city: "sydney" },
    { id: 1850147, city: "tokyo" },
  ];

  const { data: london } = useFetchCitiesQuery(cities[0].id);
  const { data: newYork } = useFetchCitiesQuery(cities[1].id);
  const { data: mumbai } = useFetchCitiesQuery(cities[2].id);
  const { data: sydney } = useFetchCitiesQuery(cities[3].id);
  const { data: tokyo } = useFetchCitiesQuery(cities[4].id);

  const [calculatorNumber, setCalculatorNumber] = useState<number>(0);
  const fetchedWeatherCards: any = [london, newYork, mumbai, sydney, tokyo];
  const [weatherCards, setWeatherCards] = useState(fetchedWeatherCards);

  if (fetchedWeatherCards.indexOf(undefined) !== -1) {
    return <div>Loading data...</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCalculatorNumber(+e.target.value);
  };

  const minTemperature = (index: number) => {
    if (weatherCards === fetchedWeatherCards) {
      setWeatherCards(calByMinTemp(weatherCards, calculatorNumber, index));
    } else {
      setWeatherCards(
        calByMinTemp(fetchedWeatherCards, calculatorNumber, index)
      );
    }
  };

  const maxTemperature = (index: number) => {
    if (weatherCards === fetchedWeatherCards) {
      setWeatherCards(calByMaxTemp(weatherCards, calculatorNumber, index));
    } else {
      setWeatherCards(
        calByMaxTemp(fetchedWeatherCards, calculatorNumber, index)
      );
    }
  };

  const displayData = () => {
    if (weatherCards.indexOf(undefined) !== -1) {
      return fetchedWeatherCards;
    } else {
      return weatherCards;
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              {displayData().map(
                (city: ExtendedWeatherTypes, index: number) => {
                  return (
                    <Card key={`key-${index}`} className="text-center">
                      <Card.Header>
                        <h2>{city?.city_name}</h2>
                      </Card.Header>
                      <Form inline className={css.formStyles}>
                        <FormControl
                          type="number"
                          placeholder="Add number to filter"
                          className={css.innerStyles}
                          onChange={handleChange}
                          defaultValue={0}
                        />
                        <Button
                          onClick={() => minTemperature(index)}
                          variant="outline-success"
                          className={css.innerStyles}
                        >
                          Filter by <b>min</b> temperature
                        </Button>
                        <Button
                          onClick={() => maxTemperature(index)}
                          variant="outline-success"
                          className={css.innerStyles}
                        >
                          Filter by <b>max</b> temperature
                        </Button>
                      </Form>
                      <p className={css.messageStyle}>
                        * Add value to filter days by temperature, default value
                        is "0"
                      </p>
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
                }
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExtendedWeather;
