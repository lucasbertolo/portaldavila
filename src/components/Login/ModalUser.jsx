import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import UserCard from './UserCard';

export default function ModalUser(props) {
  const {
    modalUser, closeModalUser, user, refreshUser,
  } = props;

  return (
    <div>
      <Dialog
        open={modalUser}
        onClose={closeModalUser}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <DialogContent>
          <UserCard
            user={user}
            handleClose={closeModalUser}
            refreshUser={refreshUser}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
