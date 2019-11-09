import React from 'react';

import Visit from '../Visit/Visit';

import './CardVisitation.scss';

const CardVisitation = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="card-visit">
      <header className="header">
        <span>Venda - R$ 1500,00</span>
        <span>Centro - Piracicaba - SP</span>
        <span>Barracão</span>
      </header>
      <main>
        <span>Faça uma visita e conheça melhor o imóvel ou contate-nos para mais informações</span>
      </main>
      <nav className="container-btn">
        <button className="btn-1 btn-laydown" type="button" onClick={handleClickOpen}>Agendar</button>
        <Visit open={open} handleClose={handleClose} />
      </nav>
    </div>
  );
};

export default CardVisitation;
