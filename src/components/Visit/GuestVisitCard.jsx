import React from 'react';
import enums from '../../content/enums';

const GuestVisitCard = (props) => {
  const {
    url, date, time, code, contact,
  } = props;

  const responseOption = () => {
    const string = 'para a confirmação do endereço e os dados completos da visitas';
    switch (contact) {
      case enums.contactOption.email:
        return `Cheque seu email ${string}`;
      case enums.contactOption.whatsApp:
        return `Cheque seu whatsapp ${string}`;
      case enums.contactOption.phone:
        return `Voce receberá uma ligação ${string}`;
      default:
        return '';
    }
  };

  const res = responseOption();

  return (
    <div className="container-guest-visit">
      <div className="card-visit">
        <div className="front side">
          <h1 className="logo">{url}</h1>
        </div>

        <div className="back side">
          <h3 className="name">
            Código
            {code}
          </h3>
          <div className="info">
            <p>
              <span className="property">Data: </span>
              {date}
            </p>
            <p>
              <span className="property">Horário: </span>
              {time}
            </p>
            <p>{res}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestVisitCard;
