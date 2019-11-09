import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function MaterialUIPickers() {
  // The first commit of Material-UI

  const today = new Date();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const classes = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          minDate={today}
          id="date-picker-inline"
          label="Escolha o dia"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <TextField
          id="time"
          label="Horário"
          type="time"
          defaultValue="09:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 900,
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
