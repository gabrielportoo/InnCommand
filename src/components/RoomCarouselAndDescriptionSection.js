import { Container, Row, Col, Button, Carousel } from "react-bootstrap";

function RoomCarouselAndDescriptionSection() {
  return (
    <Container className="my-5">
      <Row>
        {/* Coluna da Descrição e Botão */}
        <Col lg={4} className="d-flex flex-column justify-content-center">
          <div className="p-4" style={{ textAlign: "justify" }}>
            <h2>Quartos do Hotel</h2>
            <p>
              Conheça nossos quartos elegantes e confortáveis, projetados para
              oferecer o máximo de conforto e relaxamento. Cada quarto é
              equipado com todas as comodidades modernas que você espera,
              garantindo uma experiência de hospedagem memorável.
            </p>
            <Button variant="secondary" href="#quartos">
              MAIS INFORMAÇÕES
            </Button>
          </div>
        </Col>

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
                src="https://via.placeholder.com/800x400?text=Imagem+7"
                alt="Imagem 7"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Imagem+8"
                alt="Imagem 8"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Imagem+9"
                alt="Imagem 9"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default RoomCarouselAndDescriptionSection;
