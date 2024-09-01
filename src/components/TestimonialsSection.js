import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./css/comentImage.css";

function TestimonialsSection() {
  return (
    <div
      className="testimonials-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Imagem de Fundo */}
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/511586703.jpg?k=c443a4558ec960c515711fa17b18dcfd5e4b6c8abfe16fb18cec03588af65093&o=&hp=1"
        alt="Piscina do Hotel"
        className="w-100"
        style={{
          filter: "brightness(50%)",
          height: "600px",
          objectFit: "cover",
        }}
      />

      {/* Carrossel de Comentários */}
      <Container className="container-edition">
        <Carousel
          indicators={false}
          controls={false}
          interval={5000}
          pause={false}
        >
          <Carousel.Item>
            <div>
              <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
                "A estadia foi incrível! O serviço é de primeira e as
                acomodações são muito confortáveis."
              </p>
              <p>- Maria Silva, TripAdvisor</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
                "Hotel maravilhoso, com ótima localização e excelente
                atendimento. Super recomendo!"
              </p>
              <p>- João Pereira, Google Reviews</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
                "Experiência fantástica! Ótima opção para relaxar e curtir as
                férias."
              </p>
              <p>- Ana Costa, Booking.com</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default TestimonialsSection;
