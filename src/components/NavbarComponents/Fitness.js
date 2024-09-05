import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Fitness() {
  return (
    <div>
      {/* Imagem cobrindo a largura total da tela */}
      <div
        style={{
          backgroundImage:
            "url(https://hotelmt.com.br/wp-content/uploads/2020/03/original-72785a5b6aa9a837d421afeb89e5b85b.jpg?x60436)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          width: "100%",
        }}
      />

      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h2 style={{ paddingTop: "50px", textAlign: "center" }}>Fitness</h2>
            <hr></hr>

            {/* Imagem com link, centralizada e ocupando 30% da largura */}
            <a href="https://gramado.blog.br/wp-content/uploads/2019/10/varanda-das-bromelias-academia.jpg">
              <div
                style={{
                  backgroundImage:
                    "url(https://gramado.blog.br/wp-content/uploads/2019/10/varanda-das-bromelias-academia.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px", // ajuste a altura conforme necessário
                  width: "60%", // ocupando 30% da largura da tela
                  margin: "20px auto", // centraliza a imagem horizontalmente e adiciona margem no topo
                }}
              />
            </a>

            <h2 style={{ textAlign: "center" }}>ACADEMIA</h2>
            <p style={{ textAlign: "center" }}>
              <em>Horário de Funcionamento - 09h às 22h</em>
            </p>
            <hr />
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
            "url(https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
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

export default Fitness;
