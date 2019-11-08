import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { ValidationFilter } from '../Helpers/Validation';

import './Tags.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '5px',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function Tags({ state }) {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([]);

  useEffect(() => {
    const listItems = { ...state };

    const items = ValidationFilter(listItems);

    if (items.length > 0) {
      items.map((x, i) => {
        const repeated = chipData.filter((el) => el.label === x.label);
        if (repeated.length === 0) {
          return (
            chipData.push({ key: i, label: x.label })
          );
        }
        return null;
      });
    }
  }, [state]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };


  return (
    <div className="tags-box">
      <Paper className={classes.root}>
        {chipData.length > 0 && chipData.map((data) => (
          <Chip
            key={data.key}
            label={data.label}
            onDelete={handleDelete(data)}
            className={classes.chip}
          />
        ))}
      </Paper>
    </div>
  );
}
