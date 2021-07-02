import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import css from "./Header.module.scss";

const Header = () => {
  return (
    <div className={css.header}>
      <Container>
        <Row>
          <Col className="text-center">
            <Nav className="justify-content-center" as="ul">
              <Nav.Item className={css.listStyle} as="li">
                <Link to={"/"}>Current Weather</Link>
              </Nav.Item>
              <Nav.Item className={css.listStyle} as="li">
                <Link to={"/extended-weather"}>Extended Weather</Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
