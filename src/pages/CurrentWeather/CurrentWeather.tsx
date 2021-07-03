import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useFetchCityQuery } from "../../features/cities/citiesApi";

const CurrentWeather: React.FC = () => {
  const { data } = useFetchCityQuery();
  return (
    <div>
      <Container>
        <Row>
          {data?.data.map((city, index) => (
            <Col key={`key-${index}`}>
              <Card className="text-center">
                <Card.Header>
                  <h2>{city.city_name}</h2>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Day: {city.datetime}</Card.Title>
                  <p>Temperature: {city.temp}</p>
                  <p>Precipitation: {city.weather.description}</p>
                  <p>
                    Wind: {city.wind_dir} {city.wind_cdir}
                  </p>
                  <p>description: {city.weather.description}</p>
                </Card.Body>
                <Card.Footer className="text-muted">
                  clouds: {city.clouds}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CurrentWeather;
