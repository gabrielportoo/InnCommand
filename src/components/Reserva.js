import React from "react";

function Reserva() {
  return (
    <div style={{ paddingTop: "150px", textAlign: "center" }}>
      <h2>Faça sua Reserva</h2>
      {/* Aqui você pode adicionar o conteúdo ou formulário de reservas */}
      <p>Preencha o formulário abaixo para realizar sua reserva.</p>
      {/* Exemplo de formulário simples de reserva */}
      <form style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" className="form-control" placeholder="Seu nome" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Seu email"
          />
        </div>
        <div className="form-group">
          <label>Data de Check-in:</label>
          <input type="date" className="form-control" />
        </div>
        <div className="form-group">
          <label>Data de Check-out:</label>
          <input type="date" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Reservar Agora
        </button>
      </form>
    </div>
  );
}

export default Reserva;
