import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/navbarStyle.css";

function NavigationBar() {
  return (
    <Navbar className="nav-conatiner" bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="navbar-brand" as={Link} to={"/"}>
          InnCommand
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/quartos"}>
              QUARTOS
            </Nav.Link>
            <Nav.Link as={Link} to={"/fitness"}>FITNESS</Nav.Link>
            <Nav.Link href="#lazer">LAZER</Nav.Link>
            <Nav.Link as={Link} to={"/events"}>EVENTOS</Nav.Link>
            <Nav.Link as={Link} to={"/restaurants"}>RESTAURANTES</Nav.Link>
            <Nav.Link href="#galeria">GALERIA</Nav.Link>
            <Nav.Link as={Link} to={"/contacts"}>CONTATOS</Nav.Link>
          </Nav>
          <Button className="button-style" as={Link} to={"/reservar"}>
            RESERVAR
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
