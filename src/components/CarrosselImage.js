import { Carousel } from "react-bootstrap";

function ImageCarousel() {
  return (
    <div style={{ marginTop: "50px" }}>
      <Carousel
        indicators={false}
        controls={false}
        interval={4000}
        pause={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
            alt="Imagem 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://barahotel.com.br/wp-content/uploads/2024/02/DSC_9180-HDR.jpg"
            alt="Imagem 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://visualpraiahotel.com.br/wp-content/uploads/2021/11/hotel-beira-mar-em-natal-Visual-Praia-2.jpg"
            alt="Imagem 3"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
