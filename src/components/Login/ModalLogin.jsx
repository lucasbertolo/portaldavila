import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import Login from './Login';

export default function Visit(props) {
  const {
    open, handleClose, handleLogin, handleRegister,
  } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <DialogContent>
          <Login
            handleLogin={handleLogin}
            handleRegister={handleRegister}
          />
        </DialogContent>

      </Dialog>
    </div>
  );
}
