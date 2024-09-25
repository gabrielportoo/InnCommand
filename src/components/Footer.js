import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import "./css/footerStyle.css";

function Footer() {
  return (
    <footer>
      <Container>
        {/* Nome do Hotel */}
        <Row className="text-center mb-3">
          <Col>
            <h2>InnCommand Hotel</h2>
          </Col>
        </Row>

        {/* Endereço, Email e Telefone */}
        <Row className="text-center mb-3">
          <Col>
            <p>123 Rua do Sol, Fortaleza, CE, Brasil</p>
            <p>Email: contato@incommandhotel.com</p>
            <p>Telefone: (85) 1234-5678</p>
          </Col>
        </Row>

        {/* Link para Termos e Condições */}
        <Row className="text-center mb-4">
          <Col>
            <a className="conditions" href="/termos-e-condicoes">
              Termos e condições
            </a>
          </Col>
        </Row>

        {/* Link para Tela de Login */}
        <Row className="text-center mb-4">
          <Col>
            <a className="conditions2" href="/">
              Sair da conta
            </a>
          </Col>
        </Row>

        {/* Logos das Redes Sociais */}
        <Row className="text-center">
          <Col>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#000000", margin: "0 10px" }}
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#000000", margin: "0 10px" }}
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="mailto:contato@incommandhotel.com"
              style={{ color: "#000000", margin: "0 10px" }}
            >
              <FaEnvelope size={30} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
