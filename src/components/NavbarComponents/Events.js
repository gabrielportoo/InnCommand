import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

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
                        <h2 style={{ paddingTop: "50px", textAlign: "center" }}>Eventos</h2>
                        <hr></hr>
                        
                        {/* Linha horizontal com margens esquerda e direita */}
                        <hr style={{ 
                            marginLeft: '20%', 
                            marginRight: '20%', 
                            border: '0'  // remove a borda para manter a linha padrão
                        }} />
                    </Col>
                </Row>

                <Row>
                    <Col md={6} style={{ textAlign: "center" }}>
                        <a href="https://granhotel.net.br/wp-content/uploads/2019/11/20190627_182225.jpg">
                            <div style={{ 
                                backgroundImage: 'url(https://granhotel.net.br/wp-content/uploads/2019/11/20190627_182225.jpg)', 
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center', 
                                height: '400px',  
                                width: '100%',  
                                margin: '20px 0'  
                            }} />
                        </a>
                    </Col>
                    <Col md={6} style={{ textAlign: "center", paddingTop: "70px" }}>
                        <h2>
                            Salão de Eventos
                        </h2>
                        <p>
                        Nosso salão de eventos é perfeito para reuniões, conferências e celebrações. Com capacidade para [número] pessoas, oferece tecnologia audiovisual avançada, Wi-Fi gratuito e opções de catering personalizadas. Nossa equipe está pronta para garantir que seu evento seja um sucesso, com uma decoração elegante e flexível para atender suas necessidades.
                        </p>
                        <Button variant="primary" href="/reservar">
                            Reservar Agora
                        </Button>
                    </Col>
                </Row>
            </Container>

            {/* Imagem abaixo do Container com efeito parallax */}
            <div 
                style={{ 
                    backgroundImage: 'url(https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', 
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
