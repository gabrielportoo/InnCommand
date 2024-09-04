import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Rooms() {
  return (
    <div>
      {/* Imagem cobrindo a largura total da tela */}
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          width: "100%",
        }}
      />

      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h2 style={{ paddingTop: "50px", textAlign: "center" }}>Quartos</h2>
            <hr></hr>

            {/* Imagem com link, centralizada e ocupando 30% da largura */}
            <a href="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
              <div
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px", // ajuste a altura conforme necessário
                  width: "60%", // ocupando 30% da largura da tela
                  margin: "20px auto", // centraliza a imagem horizontalmente e adiciona margem no topo
                }}
              />
            </a>

            <h2 style={{ textAlign: "center" }}>SUÍTE</h2>
            <p
              style={{
                textAlign: "center",
                marginLeft: "20%",
                marginRight: "20%",
              }}
            >
              Espaço amplo com sala de estar separada, cama king size, banheira
              de hidromassagem, e vista panorâmica, perfeito para mais conforto
              e privacidade.
            </p>

            <a href="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
              <div
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px", // ajuste a altura conforme necessário
                  width: "60%", // ocupando 30% da largura da tela
                  margin: "20px auto", // centraliza a imagem horizontalmente e adiciona margem no topo
                }}
              />
            </a>

            <h2 style={{ textAlign: "center" }}>QUARTO DELUXE</h2>
            <p
              style={{
                textAlign: "center",
                marginLeft: "20%",
                marginRight: "20%",
              }}
            >
              Quarto elegante com cama king size, decoração refinada, minibar, e
              produtos de higiene premium, oferecendo uma estadia sofisticada.
            </p>

            <a href="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
              <div
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px", // ajuste a altura conforme necessário
                  width: "60%", // ocupando 30% da largura da tela
                  margin: "20px auto", // centraliza a imagem horizontalmente e adiciona margem no topo
                }}
              />
            </a>

            <h2 style={{ textAlign: "center" }}>QUARTO STANDARD</h2>
            <p
              style={{
                textAlign: "center",
                marginLeft: "20%",
                marginRight: "20%",
              }}
            >
              Acomodação básica e confortável com cama, banheiro privativo, TV e
              Wi-Fi, ideal para estadias rápidas.
            </p>

            <Button variant="primary" href="/reservar">
              Reservar Agora
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Imagem com efeito Parallax abaixo do Container */}
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg)",
          backgroundAttachment: "fixed", // Efeito Parallax
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px", // ajuste a altura conforme necessário
          width: "100%",
          marginTop: "20px",
        }}
      />
    </div>
  );
}

export default Rooms;
