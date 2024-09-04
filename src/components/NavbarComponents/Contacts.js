import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function Contacts() {
    return (
        <Container>
            <Row>
                <Col style={{ textAlign: "center" }}>
                    <h2 style={{ paddingTop: "50px", textAlign: "center" }}>Contacts</h2>
                    
                    {/* Linha horizontal com margens esquerda e direita */}
                    <hr style={{ 
                        marginLeft: '20%', 
                        marginRight: '20%', 
                        border: '0'  // remove a borda para manter a linha padrão
                    }} />
                </Col>
            </Row>

            <Row>
                <Col md={12} style={{ textAlign: "center", paddingTop: '20px' }}>
                    <h2>Contatos</h2>
                    {/* Google Maps iframe */}
                    <div style={{ margin: '20px 0' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095046!2d144.95373531561682!3d-37.8162797421019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57757f239fe80f!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1632376198248!5m2!1sen!2sau"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={12} style={{ textAlign: "center", paddingTop: '50px' }}>
                    <p>
                        Entre em contato conosco para mais informações sobre nossos serviços e reservas.
                    </p>
                    <p>
                        <em>Email:</em> contato@hotel.com.br
                    </p>
                    <p>
                        <em>Telefone:</em> (11) 1234-5678
                    </p>
                </Col>
            </Row>

            {/* Formulário de Contato */}
            <Row>
                <Col md={12} style={{ textAlign: "center", paddingTop: '20px' }}>
                    <Form>
                        <Form.Group controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Digite seu nome" 
                                style={{ width: '40%', margin: '0 auto' }} // largura ajustada para 40%
                            />
                        </Form.Group>

                        <Form.Group controlId="formTelefone" style={{ marginTop: '15px' }}>
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Digite seu telefone" 
                                style={{ width: '40%', margin: '0 auto' }} // largura ajustada para 40%
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" style={{ marginTop: '15px' }}>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Digite seu e-mail" 
                                style={{ width: '40%', margin: '0 auto' }} // largura ajustada para 40%
                            />
                        </Form.Group>

                        <Form.Group controlId="formMensagem" style={{ marginTop: '15px' }}>
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Digite sua mensagem" 
                                style={{ width: '40%', margin: '0 auto' }} // largura ajustada para 40%
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            {/* Botão Fale Conosco */}
            <Row>
                <Col md={12} style={{ textAlign: "center", padding: '20px' }}>
                    <Button variant="primary" href="/contacts">
                        Fale Conosco
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Contacts;
