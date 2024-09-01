import { Container, Row, Col } from "react-bootstrap";
import "./css/imageStyle.css";

function ServicesSection() {
  return (
    <Container className="my-5 text-center">
      <h2>Nossos Serviços</h2> {/* Título centralizado */}
      <p className="mt-3" style={{ textAlign: "justify" }}>
        Oferecemos uma variedade de serviços para tornar sua estadia confortável
        e inesquecível, incluindo quartos luxuosos, espaços para eventos e
        deliciosos restaurantes. Conheça um pouco mais sobre nossos principais
        serviços abaixo.
      </p>
      {/* Imagens Clicáveis */}
      <Row className="mt-4">
        <Col md={4}>
          <div className="service-image-wrapper">
            <a href="#quartos">
              <img
                src="https://via.placeholder.com/300x200?text=Quartos"
                alt="Quartos"
                className="img-fluid"
              />
              <div className="overlay">Quartos</div>
            </a>
          </div>
        </Col>
        <Col md={4}>
          <div className="service-image-wrapper">
            <a href="#eventos">
              <img
                src="https://via.placeholder.com/300x200?text=Eventos"
                alt="Eventos"
                className="img-fluid"
              />
              <div className="overlay">Eventos</div>
            </a>
          </div>
        </Col>
        <Col md={4}>
          <div className="service-image-wrapper">
            <a href="#restaurantes">
              <img
                src="https://via.placeholder.com/300x200?text=Restaurantes"
                alt="Restaurantes"
                className="img-fluid"
              />
              <div className="overlay">Restaurantes</div>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ServicesSection;
