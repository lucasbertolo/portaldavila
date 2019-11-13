import React from 'react';

import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import Tooltip from '@material-ui/core/Tooltip';

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '1em',
        color: 'black',
        backgroundColor: 'lightblue',
      },
    },
  },
});

export default function WrapperTooltip({ children, title, position }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Tooltip title={title} placement={position || 'right'}>
        {children}
      </Tooltip>

    </MuiThemeProvider>
  );
}
