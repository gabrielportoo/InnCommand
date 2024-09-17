import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import "./css/reservaStyle.css";

function ReservationPage() {
  const [reservationDetails, setReservationDetails] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "Standard",
    name: "",
    email: "",
    phone: "",
  });

  // Função para lidar com mudanças no estado
  const handleChange = (e) => {
    setReservationDetails({
      ...reservationDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Função para aumentar o número de hóspedes
  const incrementGuests = () => {
    setReservationDetails((prevDetails) => ({
      ...prevDetails,
      guests: Math.min(prevDetails.guests + 1, 10), // Limita o máximo para 10 hóspedes
    }));
  };

  // Função para diminuir o número de hóspedes
  const decrementGuests = () => {
    setReservationDetails((prevDetails) => ({
      ...prevDetails,
      guests: Math.max(prevDetails.guests - 1, 1), // Garante que não seja menor que 1
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Cadastrar usuário
      const userResponse = await axios.post(
        "https://inncommand.vercel.app/users",
        {
          name: reservationDetails.name,
          email: reservationDetails.email,
          phone: reservationDetails.phone,
        }
      );
      const userId = userResponse.data.id;

      // Cadastrar quarto
      const roomResponse = await axios.post(
        "https://inncommand.vercel.app/rooms",
        {
          type: reservationDetails.type,
        }
      );
      const roomId = roomResponse.data.id;

      // Cadastrar reserva
      const bookingResponse = await axios.post(
        "https://inncommand.vercel.app/bookings",
        {
          userId: userId,
          roomId: roomId,
          startDate: reservationDetails.checkIn,
          endDate: reservationDetails.checkOut,
          totalPrice: reservationDetails.totalPrice,
          status: reservationDetails.status,
        }
      );

      console.log("Resposta da reserva:", bookingResponse.data);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <div className="reservation-container">
      <h1 className="reservation-title">Faça sua Reserva</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formCheckIn">
              <Form.Label>Check-in</Form.Label>
              <Form.Control
                type="date"
                name="checkIn"
                value={reservationDetails.checkIn}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCheckOut">
              <Form.Label>Check-out</Form.Label>
              <Form.Control
                type="date"
                name="checkOut"
                value={reservationDetails.checkOut}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formGuests">
              <Form.Label>Número de Hóspedes</Form.Label>
              <div className="guests-counter">
                <Button variant="outline-secondary" onClick={decrementGuests}>
                  -
                </Button>
                <span className="guests-count">
                  {reservationDetails.guests}
                </span>
                <Button variant="outline-secondary" onClick={incrementGuests}>
                  +
                </Button>
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formRoomType">
              <Form.Label>Tipo de Quarto</Form.Label>
              <Form.Control
                as="select"
                name="roomType"
                value={reservationDetails.roomType}
                onChange={handleChange}
              >
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Suite">Suíte</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Digite seu nome completo"
                value={reservationDetails.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={reservationDetails.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Form.Group controlId="formPhone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Digite seu telefone"
              value={reservationDetails.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>

        <Button className="reservation-button" type="submit">
          Confirmar Reserva
        </Button>
      </Form>
    </div>
  );
}

export default ReservationPage;
