import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Gallery() {
  return (
    <Container className="lazer-container">
      <Row>
        <Col>
          <h2 style={{ paddingTop: "150px", textAlign: "center" }}>Galeria</h2>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Bem-vindo à nossa seção de galeria, onde você pode encontrar várias
            fotos do nosso hotel!
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="d-flex justify-content-center">
          <Image
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Área de Lazer 1"
            className="img-fluid"
          />
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Image
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Área de Lazer 2"
            className="img-fluid"
          />
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Image
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Área de Lazer 2"
            className="img-fluid"
            style={{ paddingTop: "10px" }}
          />
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Image
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Área de Lazer 2"
            className="img-fluid"
          />
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Image
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Área de Lazer 2"
            className="img-fluid"
          />
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Image
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Área de Lazer 2"
            className="img-fluid"
          />
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Image
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Área de Lazer 2"
            className="img-fluid"
          />
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Image
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Área de Lazer 2"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
