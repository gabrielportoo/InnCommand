import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/navComponents/galleryStyle.css";

function Gallery() {
  return (
    <Container className="gallery-container">
      <Row>
        <Col>
          <h2 className="text-center galeria-title">Galeria</h2>
          <p>
            Bem-vindo à nossa seção de galeria, onde você pode encontrar várias
            fotos do nosso hotel!
          </p>
        </Col>
        <hr />
      </Row>

      <Row className="mt-4">
        {/* Primeira linha de imagens */}
        <Col md={4} sm={6} xs={12} className="mb-4">
          <Image
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/511586703.jpg?k=c443a4558ec960c515711fa17b18dcfd5e4b6c8abfe16fb18cec03588af65093&o=&hp=1"
            alt="Imagem 1"
            className="img-fluid galeria-image"
          />
        </Col>
        <Col md={4} sm={6} xs={12} className="mb-4">
          <Image
            src="https://barahotel.com.br/wp-content/uploads/2024/02/DSC_9180-HDR.jpg"
            alt="Imagem 2"
            className="img-fluid galeria-image"
          />
        </Col>
        <Col md={4} sm={6} xs={12} className="mb-4">
          <Image
            src="https://visualpraiahotel.com.br/wp-content/uploads/2021/11/hotel-beira-mar-em-natal-Visual-Praia-2.jpg"
            alt="Imagem 3"
            className="img-fluid galeria-image"
          />
        </Col>

        {/* Segunda linha de imagens */}
        <Col md={4} sm={6} xs={12} className="mb-4">
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ed/39/hotel-presidente-4s.jpg?w=1200&h=-1&s=1"
            alt="Imagem 4"
            className="img-fluid galeria-image"
          />
        </Col>
        <Col md={4} sm={6} xs={12} className="mb-4">
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ed/5d/hotel-presidente-4s.jpg?w=1200&h=-1&s=1"
            alt="Imagem 5"
            className="img-fluid galeria-image"
          />
        </Col>
        <Col md={4} sm={6} xs={12} className="mb-4">
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/34/66/hotel-presidente-4s.jpg?w=1200&h=-1&s=1"
            alt="Imagem 6"
            className="img-fluid galeria-image"
          />
        </Col>

        {/* Terceira linha de imagens */}
        <Col md={4} sm={6} xs={12} className="mb-4">
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/e9/cf/18/hotel-presidente-4s-bano.jpg?w=1200&h=-1&s=1"
            alt="Imagem 7"
            className="img-fluid galeria-image"
          />
        </Col>
        <Col md={4} sm={6} xs={12} className="mb-4">
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/01/d3/37/hotel-presidente.jpg?w=1200&h=-1&s=1"
            alt="Imagem 8"
            className="img-fluid galeria-image"
          />
        </Col>
        <Col md={4} sm={6} xs={12} className="mb-4">
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/73/9b/f0/hotel-presidente-4s.jpg?w=1200&h=-1&s=1"
            alt="Imagem 9"
            className="img-fluid galeria-image"
          />
        </Col>

        {/* Quarta linha de imagens */}
        <Col md={4} sm={6} xs={12} className="mb-4">
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/34/47/hotel-presidente-4s.jpg?w=1200&h=-1&s=1"
            alt="Imagem 10"
            className="img-fluid galeria-image"
          />
        </Col>
        <Col md={4} sm={6} xs={12} className="mb-4">
          <Image
            src="https://gramado.blog.br/wp-content/uploads/2019/10/varanda-das-bromelias-academia.jpg"
            alt="Imagem 11"
            className="img-fluid galeria-image"
          />
        </Col>
        <Col md={4} sm={6} xs={12} className="mb-4">
          <Image
            src="https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Imagem 12"
            className="img-fluid galeria-image"
          />
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default Gallery;
