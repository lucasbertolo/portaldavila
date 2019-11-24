import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import EmailForm from './EmailForm';

export default function ModalEmail({ handleClose, open }) {
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div>
          <EmailForm />
        </div>

      </Dialog>
    </div>
  );
}
