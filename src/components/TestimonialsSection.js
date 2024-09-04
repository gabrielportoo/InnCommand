import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./css/comentImage.css";

function TestimonialsSection() {
  return (
    <div className="testimonials-section">
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
              <p>
                "A estadia foi incrível! O serviço é de primeira e as
                acomodações são muito confortáveis."
              </p>
              <p>- Maria Silva, TripAdvisor</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <p>
                "Hotel maravilhoso, com ótima localização e excelente
                atendimento. Super recomendo!"
              </p>
              <p>- João Pereira, Google Reviews</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <p>
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
