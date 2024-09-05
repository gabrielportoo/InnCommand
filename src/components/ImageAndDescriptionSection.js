import { Container, Carousel, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ImageAndDescriptionSection() {
  return (
    <Container className="my-5" style={{ paddingTop: "70px" }}>
      <Row>
        {/* Coluna do Carrossel */}
        <Col lg={8}>
          <Carousel
            interval={5000}
            controls={true}
            indicators={true}
            pause={false}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://visualpraiahotel.com.br/wp-content/uploads/2021/11/hotel-beira-mar-em-natal-Visual-Praia-2.jpg"
                alt="Imagem 4"
                height="500px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ed/39/hotel-presidente-4s.jpg?w=1200&h=-1&s=1"
                alt="Imagem 5"
                height="500px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ed/5d/hotel-presidente-4s.jpg?w=1200&h=-1&s=1"
                alt="Imagem 6"
                height="500px"
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        {/* Coluna da Descrição e Botão */}
        <Col lg={4} className="d-flex flex-column justify-content-center">
          <div className="p-4">
            <h2>Bem-vindo ao Nosso Hotel</h2>
            <p style={{ textAlign: "justify" }}>
              Desfrute de uma estadia inesquecível em nosso hotel, com
              acomodações de luxo, serviços de primeira classe, e uma
              localização perfeita para explorar a cidade. Reserve sua estadia
              agora e experimente o melhor que temos a oferecer.
            </p>
            <Button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              variant="primary"
              as={Link}
              to="/reservar"
            >
              RESERVAR
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageAndDescriptionSection;
