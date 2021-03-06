import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { RingLoader } from 'react-spinners';
import ContactBox from '../Contact/ContactBox';
import DatePicker from './DatePicker';
import db from '../Helpers/ApiFetch';

import './Visit.scss';

export default function Visit({
  open, handleClose, user, propertyId,
}) {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(' Ocorreu um erro no agendamento. Pedimos desculpa pelo incoveniente.');

  const today = new Date();
  const initialDate = new Date(today);
  initialDate.setDate(initialDate.getDate() + 1);

  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState('09:30');

  const handleDateChange = (e) => setDate(e);
  const handleTimeChange = (e) => setTime(e.target.value);

  const handleNext = () => setIndex(index + 1);

  const handleSchedule = async () => {
    setIsLoading(true);
    db.post('/visit', {
      property_id: propertyId,
      user_id: user.id || user.userId,
      time_register: time,
      date_register: date,
    })
      .then(() => {
        setIsLoading(false);
        handleNext();
      })
      .catch((err) => {
        if (err.response.status === 500) {
          setErrorMessage('Já existe uma visita cadastrada para este usuário neste imóvel');
        }
        setIsLoading(false);
        setIndex(3);
      });
  };

  const componentList = [
    {
      label: 'Agendar horário',
      component: (
        <DatePicker
          handleDateChange={handleDateChange}
          time={time}
          date={date}
          handleTimeChange={handleTimeChange}
        />
      ),
      button: 'Próximo',
      action: handleSchedule,
    },
    {
      label: 'Confirme o meio de contato',
      component: <ContactBox user={user} />,
      button: 'Próximo',
      action: handleNext,
    },
    {
      label: 'Confirmação',
      component: (
        <div>
          Entraremos em contato para confirmar o agendamento. Muito Obrigado!
        </div>
      ),
      button: 'OK',
      action: handleClose,
    },
    {
      label: 'Erro',
      component: (
        <div>
          {errorMessage}
        </div>
      ),
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className="visit-modal"
      >
        <DialogTitle
          id="form-dialog-title"
          className="visit-title"
        >
          {label}
        </DialogTitle>
        <DialogContent className="visit-content">
          {isLoading ? (
            <div
              style={{
                margin: 'auto',
                width: '80vh',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <RingLoader size={150} color="#123abc" loading={isLoading} />
            </div>
          ) : (
            <div>{component}</div>
          )}
        </DialogContent>
        <DialogActions className="visit-action">
          {index === 0 && (
          <Button onClick={handleClose}>
              Cancelar
          </Button>
          )}
          <Button onClick={action}>
            {button}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
