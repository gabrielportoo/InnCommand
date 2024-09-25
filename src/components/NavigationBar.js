import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/navbarStyle.css";

function NavigationBar() {
  const location = useLocation();

  // Não renderiza a NavigationBar se estiver na rota de login
  if (location.pathname === "/") {
    return null;
  }

  return (
    <Navbar className="nav-conatiner" bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="navbar-brand" as={Link} to={"/home"}>
          InnCommand
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/quartos"}>
              QUARTOS
            </Nav.Link>
            <Nav.Link as={Link} to={"/fitness"}>
              FITNESS
            </Nav.Link>
            <Nav.Link as={Link} to={"/lazer"}>
              LAZER
            </Nav.Link>
            <Nav.Link as={Link} to={"/events"}>
              EVENTOS
            </Nav.Link>
            <Nav.Link as={Link} to={"/restaurants"}>
              RESTAURANTES
            </Nav.Link>
            <Nav.Link as={Link} to={"/galeria"}>
              GALERIA
            </Nav.Link>
            <Nav.Link as={Link} to={"/contacts"}>
              CONTATOS
            </Nav.Link>
            <Button className="button-style" as={Link} to={"/reservar"}>
            RESERVAR
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
