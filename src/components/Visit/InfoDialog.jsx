/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import './InfoDialog.scss';
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
        return 'Telefone';
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
          <div className="confirmation-visit-box">
            <h3><span className="label"> Nome do solicitante: </span>  &nbsp; &nbsp;{username} </h3>
            <h3>
              <span className="label">Telefone:</span> &nbsp; &nbsp;  {phone}
            </h3>
            <h3><span className="label">Email:</span> &nbsp; &nbsp; {email} </h3>
            <p>
              Agendamento de visita para o dia {date} no imóvel
              <b> de código {property_id}</b>.
            </p>
            <p>Foi solicitado uma resposta via <i>{type}</i>.</p>
            {
                status
                  ? <p className="res">Deseja confirmar o agendamento?</p>
                  : <p> Deseja cancelar o agendamento? </p>
            }

          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Não
          </Button>
          <Button onClick={action} color="primary">
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
