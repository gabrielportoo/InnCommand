import { Container, Carousel, Button, Row, Col } from "react-bootstrap";

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
                src="https://via.placeholder.com/800x400?text=Imagem+4"
                alt="Imagem 4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Imagem+5"
                alt="Imagem 5"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Imagem+6"
                alt="Imagem 6"
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        {/* Coluna da Descrição e Botão */}
        <Col lg={4} className="d-flex flex-column justify-content-center">
          <div className="p-4" style={{ textAlign: "justify" }}>
            <h2>Bem-vindo ao Nosso Hotel</h2>
            <p>
              Desfrute de uma estadia inesquecível em nosso hotel, com
              acomodações de luxo, serviços de primeira classe, e uma
              localização perfeita para explorar a cidade. Reserve sua estadia
              agora e experimente o melhor que temos a oferecer.
            </p>
            <Button variant="primary" href="#reservar">
              RESERVAR
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageAndDescriptionSection;
