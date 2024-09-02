import { Container, Row, Col } from "react-bootstrap";
import "./css/imageStyle.css";

function ServicesSection() {
  return (
    <Container className="my-5 text-center">
      <h2>Nossos Serviços</h2> {/* Título centralizado */}
      <p className="mt-3" style={{ textAlign: "center" }}>
        Oferecemos uma variedade de serviços para tornar sua estadia confortável
        e inesquecível, incluindo quartos luxuosos, espaços para eventos e
        deliciosos restaurantes. Conheça um pouco mais sobre nossos principais
        serviços abaixo.
      </p>
      {/* Imagens Clicáveis */}
      <Row className="mt-4">
        <Col md={4}>
          <div className="service-image-wrapper">
            <a href="/quartos">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/34/66/hotel-presidente-4s.jpg?w=1200&h=-1&s=1"
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
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/73/9b/f0/hotel-presidente-4s.jpg?w=1200&h=-1&s=1"
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
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/34/47/hotel-presidente-4s.jpg?w=1200&h=-1&s=1"
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
