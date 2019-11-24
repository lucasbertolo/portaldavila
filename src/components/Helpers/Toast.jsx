import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import { amber, green } from '@material-ui/core/colors';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles();
  const {
    className, message, onClose, status, ...other
  } = props;

  return (

    <SnackbarContent
      className={classes[status]}
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className={classes.message}>
          {message}
        </span>
        )}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    />
  );
}
export default function Toast({
  status, open, handleClose, msg,
}) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MySnackbarContentWrapper
          variant="subtitle1"
          message={msg}
          status={status}
        />
      </Snackbar>

    </div>
  );
}
