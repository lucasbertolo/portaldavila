/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import enums from '../../content/enums';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default function InfoDialog({
  open, handleClose, action, user, status,
}) {
  const {
    username,
    phone,
    email,
    contact_type,
    date_register,
    property_id,
  } = user;

  const contact = () => {
    switch (contact_type) {
      case enums.contactOption.whatsApp:
        return 'Whatsapp';
      case enums.contactOption.email:
        return 'Email';
      case enums.contactOption.phone:
        return 'phone';
      default:
        return '';
    }
  };

  const type = contact();

  const date = new Date(date_register).getDate();
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Confirmação de visita
        </DialogTitle>
        <DialogContent>
          <div>
            <h3>Nome do solicitante: {username} </h3>
            <h3>
              Telefone:
              {phone}{' '}
            </h3>
            <h3>Email: {email} </h3>
            <p>
              Agendamento de visita para o dia {date} no imóvel{' '}
              <b>Código {property_id}</b>
            </p>
            <p>Foi solicitado uma resposta via {type}.</p>
            {
                status
                  ? <p>Deseja confirmar o agendamento?</p>
                  : <p> Deseja cancelar o agendamento? </p>
            }

          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={action} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
