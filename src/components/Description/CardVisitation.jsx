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
      <main className="container-btn">
        <button className="btn-1 btn-laydown" type="button" onClick={handleClickOpen}>Visitar</button>
        <Visit open={open} handleClose={handleClose} />
      </main>
    </div>
  );
};

export default CardVisitation;
