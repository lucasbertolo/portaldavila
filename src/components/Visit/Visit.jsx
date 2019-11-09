import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { RingLoader } from 'react-spinners';
import ContactBox from '../Contact/ContactBox';
import DatePicker from './DatePicker';
import { db } from '../Helpers/ApiFetch';


export default function Visit({ open, handleClose }) {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('09:30');

  const handleDateChange = (e) => setDate(e);
  const handleTimeChange = (e) => setTime(e.target.value);

  const handleNext = () => setIndex(index + 1);

  const handleSchedule = async () => {
    // setIsLoading(true);
    // const request = await db.post('/visit', {
    //   property_id: 1,
    //   user_id: 3,
    //   time_register: time,
    //   date_register: date.toISOString().slice(0, 19).replace('T', ' '),
    // });

    // if (request.status === 200) {
    //   setIsLoading(false);
    //   handleNext();
    // } else {
    //   setIsLoading(false);
    //   alert('Erro ao tentar o agendamento, tente novamente mais tarde');
    // }
    handleNext();
  };

  const componentList = [
    {
      label: 'Agendar horário',
      component: <DatePicker
        handleDateChange={handleDateChange}
        time={time}
        date={date}
        handleTimeChange={handleTimeChange}
      />,
      button: 'Próximo',
      action: handleSchedule,
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{label}</DialogTitle>
        <DialogContent>
          {
            isLoading ? (
              <div style={{
                margin: 'auto', width: '80vh', display: 'flex', justifyContent: 'center',
              }}
              >
                <RingLoader size={150} color="#123abc" loading={isLoading} />
              </div>
            ) : <div>{ component }</div>

          }
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
