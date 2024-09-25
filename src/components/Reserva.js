import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./css/reservaStyle.css";
import { db } from "../keys/firebaseConfig"; // Importação do Firebase
import { collection, addDoc, Timestamp } from "firebase/firestore"; // Métodos do Firestore
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
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
      // Adiciona a reserva ao Firestore
      await addDoc(collection(db, "reservar"), {
        checkIn: Timestamp.fromDate(new Date(reservationDetails.checkIn)),
        checkOut: Timestamp.fromDate(new Date(reservationDetails.checkOut)),
        guests: reservationDetails.guests,
        roomType: reservationDetails.roomType,
        name: reservationDetails.name,
        email: reservationDetails.email,
        phone: reservationDetails.phone,
        createdAt: Timestamp.now(),
      });

      // Exibe o toast de sucesso
      toast.success("Reserva realizada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });

      // Opcional: limpar o formulário após a submissão bem-sucedida
      setReservationDetails({
        checkIn: "",
        checkOut: "",
        guests: 1,
        roomType: "Standard",
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Erro ao realizar a reserva: ", error);
      toast.error("Erro ao realizar a reserva. Tente novamente!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    }
  };

  return (
    <div className="reservation-container">
      <h1 className="reservation-title">Faça sua Reserva</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <ToastContainer />
          {/* Same as */}
          <ToastContainer />
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
