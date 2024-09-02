import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Rooms() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2 style={{ paddingTop: "100px", textAlign: "center" }}>Quartos</h2>
          <p style={{ textAlign: "justify" }}>
            Bem-vindo à nossa seção de quartos! Oferecemos uma variedade de
            opções de acomodação para atender às suas necessidades, desde
            quartos standard confortáveis até suítes de luxo com vistas
            deslumbrantes. Todos os nossos quartos estão equipados com as
            melhores comodidades para garantir uma estadia relaxante e
            agradável.
          </p>
          <p style={{ textAlign: "justify" }}>
            Nossos quartos foram projetados para proporcionar o máximo de
            conforto, com camas espaçosas, decoração moderna e banheiros
            privativos totalmente equipados. Além disso, oferecemos serviços de
            quarto 24 horas para sua conveniência.
          </p>
          <Button variant="primary" href="/reservar">
            Reservar Agora
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Rooms;
