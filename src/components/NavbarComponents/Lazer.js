// components/Lazer.js
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/navComponents/lazerStyle.css"; // Importa o arquivo CSS

function Lazer() {
  return (
    <Container className="lazer-section my-5">
      {/* Imagem Inicial da Área de Lazer */}
      <div className="text-center">
        <Image
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/511586703.jpg?k=c443a4558ec960c515711fa17b18dcfd5e4b6c8abfe16fb18cec03588af65093&o=&hp=1"
          alt="Área de Lazer"
          className="img-fluid main-image"
        />
      </div>

      {/* Título "Lazer" */}
      <h2 className="text-center lazer-title mt-4">Lazer</h2>

      <hr />

      {/* Imagens de Áreas de Lazer */}
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
        {/* Descrição das Atividades de Lazer */}
        <p className="lazer-description text-justify mt-4">
          No nosso hotel, você encontrará uma variedade de atividades de lazer
          para todas as idades. Desfrute de nossas piscinas ao ar livre com
          vista para o mar, participe de aulas de hidroginástica, relaxe nas
          saunas ou aproveite os tratamentos de spa. Para os mais aventureiros,
          oferecemos passeios de caiaque, trilhas guiadas e aulas de mergulho.
          Temos também um clube infantil para entreter os pequenos com
          atividades supervisionadas enquanto você relaxa. Venha desfrutar de um
          ambiente tranquilo e cheio de opções para se divertir e relaxar!
        </p>

        <hr />
      </Row>
    </Container>
  );
}

export default Lazer;
