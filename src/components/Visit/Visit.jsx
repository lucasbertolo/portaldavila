import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import DatePicker from './DatePicker';
import ContactBox from '../Contact/ContactBox';

export default function Visit({ open, handleClose }) {
  const [index, setIndex] = useState(0);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleNext = () => setIndex(index + 1);


  const componentList = [
    {
      label: 'Agendar horário',
      component: <DatePicker
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />,
      button: 'Próximo',
      action: handleNext,
    },
    {
      label: 'Confirme o meio de contato',
      component: <ContactBox />,
      button: 'Próximo',
      action: handleNext,
    },
    {
      label: 'Confirmação',
      component: <div>Entraremos em contato para confirmar o agendamento. Muito Obrigado!</div>,
      button: 'OK',
      action: handleClose,
    },
  ];

  const { label } = componentList[index];
  const { component } = componentList[index];
  const { button } = componentList[index];
  const { action } = componentList[index];

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{label}</DialogTitle>
        <DialogContent>
          {component}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={action} color="primary">
            {button}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
