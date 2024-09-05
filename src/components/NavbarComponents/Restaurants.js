import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Events() {
    return (
        <div>
            {/* Imagem no topo */}
            <div style={{ 
                backgroundImage: 'url(https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                height: '400px',  // ajuste a altura conforme necessário
                width: '100%' 
            }} />

            <Container>
                <Row>
                    <Col style={{ textAlign: "center" }}>
                        <h2 style={{ paddingTop: "50px", textAlign: "center" }}>Restaurantes</h2>
                        
                        {/* Linha horizontal com margens esquerda e direita */}
                        <hr style={{ 
                            marginLeft: '20%', 
                            marginRight: '20%', 
                            border: '0'  // remove a borda para manter a linha padrão
                        }} />
                    </Col>
                </Row>

                {/* Texto e imagem ocupando 60% da largura da tela */}
                <Row className="justify-content-center">
                    <Col md={6} style={{ width: '60%' }}>
                        <Row>
                            <Col md={6} style={{ textAlign: "justify", paddingTop: "20px" }}>
                                <p>
                                    Bem-vindo ao nosso restaurante, onde a gastronomia se encontra com a arte de bem servir.
                                    Desfrute de uma experiência culinária única, com pratos que combinam ingredientes frescos
                                    e técnicas de alta gastronomia. Nosso ambiente acolhedor e sofisticado é perfeito para
                                    todas as ocasiões.
                                </p>

                                {/* Horários de funcionamento */}
                                <p><strong>Café da manhã:</strong> 6:00 AM - 10:00 AM</p>
                                <p><strong>Almoço:</strong> 12:00 PM - 2:00 PM</p>
                            </Col>

                            {/* Imagem ao lado do texto */}
                            <Col md={6} style={{ textAlign: "center", paddingTop: "20px" }}>
                                <a href="/reservar">
                                    <img 
                                        src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Espaço de Eventos"
                                        style={{ width: '100%', margin: '0 auto', display: 'block' }} 
                                    />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* Imagem abaixo do Container com efeito parallax */}
            <div 
                style={{ 
                    backgroundImage: 'url(https://images.pexels.com/photos/27094600/pexels-photo-27094600/free-photo-of-cafe-hotel-bebidas-drinks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    height: '500px',  // ajuste a altura conforme necessário
                    width: '100%', 
                    marginTop: '20px',
                    backgroundAttachment: 'fixed',  // efeito parallax
                    backgroundRepeat: 'no-repeat'  // evitar repetição da imagem
                }} 
            />
        </div>
    );
}

export default Events;
