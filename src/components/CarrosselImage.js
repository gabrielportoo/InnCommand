import { Carousel } from "react-bootstrap";

function ImageCarousel() {
  return (
    <Carousel interval={2000} fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Imagem+1"
          alt="Imagem 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Imagem+2"
          alt="Imagem 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Imagem+3"
          alt="Imagem 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
