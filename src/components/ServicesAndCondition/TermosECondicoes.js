import React from "react";
import "./termos.css";

function TermsAndConditions() {
  return (
    <div style={{ padding: "20px", paddingTop: "130px", textAlign: "justify" }}>
      <h1 style={{ textAlign: "center" }}>Termos e Condições</h1>
      <hr />
      <p style={{ textAlign: "center" }}>
        Bem-vindo ao Hotel "InnCommand". Ao utilizar nossos serviços, você
        concorda com os termos e condições abaixo:
      </p>

      <p className="justify-text">
        <strong>1. Reservas:</strong> Todas as reservas estão sujeitas à
        disponibilidade. Para confirmar sua reserva, é necessário fornecer um
        cartão de crédito válido. Cancelamentos podem ser feitos até 24 horas
        antes do check-in, sem cobrança de taxas.
      </p>

      <p className="justify-text">
        <strong>2. Check-in e Check-out:</strong> O horário de check-in é a
        partir das 14h, e o check-out deve ser feito até às 12h. Solicitações de
        check-in antecipado ou check-out tardio estão sujeitas à disponibilidade
        e podem incorrer em taxas adicionais.
      </p>

      <p className="justify-text">
        <strong>3. Pagamentos:</strong> Aceitamos pagamentos em dinheiro, cartão
        de crédito ou débito. Pagamentos antecipados podem ser solicitados para
        garantir a reserva.
      </p>

      <p className="justify-text">
        <strong>4. Política de Fumo:</strong> O hotel é 100% livre de fumo em
        todas as áreas internas. Fumar em áreas proibidas poderá resultar em
        multas ou taxas de limpeza.
      </p>

      <p className="justify-text">
        <strong>5. Política de Animais:</strong> Animais de estimação não são
        permitidos, exceto cães-guia, devidamente documentados.
      </p>

      <p className="justify-text">
        <strong>6. Responsabilidade:</strong> O hotel não se responsabiliza por
        objetos de valor deixados nos quartos. Cofres estão disponíveis para a
        segurança de seus pertences.
      </p>

      <p className="justify-text">
        <strong>7. Uso das Instalações:</strong> O uso das instalações, como
        piscina e academia, está disponível para os hóspedes durante o período
        de estadia e está sujeito a regras específicas do hotel.
      </p>

      <p className="justify-text">
        <strong>8. Modificações:</strong> O hotel se reserva o direito de
        modificar estes termos e condições a qualquer momento, sem aviso prévio.
      </p>

      <p className="justify-text">
        Ao continuar utilizando nossos serviços, você aceita e concorda com
        estes termos.
      </p>

      <p style={{ textAlign: "center" }}>
        Obrigado por escolher o Hotel "InnCommand".
      </p>
    </div>
  );
}

export default TermsAndConditions;
