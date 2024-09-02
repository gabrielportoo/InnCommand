import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Button variant="secondary" as={Link} to={"/quartos"}>
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
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/34/66/hotel-presidente-4s.jpg?w=1200&h=-1&s=1"
                alt="Imagem 7"
                height="400px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/e9/cf/18/hotel-presidente-4s-bano.jpg?w=1200&h=-1&s=1"
                alt="Imagem 8"
                height="400px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/01/d3/37/hotel-presidente.jpg?w=1200&h=-1&s=1"
                alt="Imagem 9"
                height="400px"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default RoomCarouselAndDescriptionSection;
