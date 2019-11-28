import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

import './Tags.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '5px',
    padding: theme.spacing(0.5),
    boxShadow: 'none',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function Tags({ tag, clearField }) {
  const classes = useStyles();

  const handleDelete = (item) => () => {
    clearField(item.name);
  };
  return (
    <div className="tags-box">
      <Paper className={classes.root}>
        {tag.length > 0 && tag.map((data) => (
          <Chip
            key={data.name}
            label={data.label}
            onDelete={handleDelete(data)}
            className={classes.chip}
          />
        ))}
      </Paper>
    </div>
  );
}
