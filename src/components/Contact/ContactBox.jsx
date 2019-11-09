import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { GarageIcon } from '../Common/Icons';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function ContactBox() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<GarageIcon />} />
      <BottomNavigationAction label="Favorites" icon={<GarageIcon />} />
      <BottomNavigationAction label="Nearby" icon={<GarageIcon />} />
    </BottomNavigation>
  );
}
