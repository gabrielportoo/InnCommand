import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TermosCondicoes() {
  return (
    <Container className="termos-container">
      <Row>
        <Col>
          <h2 style={{ paddingTop: "150px", textAlign: "center" }}>
            Termos e Condições
          </h2>
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
        </Col>
      </Row>
    </Container>
  );
}

export default TermosCondicoes;
