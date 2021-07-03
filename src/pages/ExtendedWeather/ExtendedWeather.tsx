import React from "react";
import { useFetchCitiesQuery } from "../../features/cities/citiesApi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import css from "./ExtendedWeather.module.scss";

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
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              {[london, newYork, mumbai, sydney, tokyo].map((city, index) => {
                return (
                  <Card key={`key-${index}`} className="text-center">
                    <Card.Header>
                      <h2>{city?.city_name}</h2>
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
        </Row>
      </Container>
    </div>
  );
};

export default ExtendedWeather;
