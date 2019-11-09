import React from 'react';

import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import DatePicker from './DatePicker';

export default function Visit({ open, handleClose }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Agendar Horário</DialogTitle>
        <DialogContent>
          <DatePicker />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
