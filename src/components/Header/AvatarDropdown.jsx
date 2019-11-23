import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { removeToken } from '../../util/user';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
export default function AvatarDropdown({
  anchorEl, handleClose, logOut, openModalUser,
}) {
  const handleLogout = () => {
    removeToken();
    logOut();
  };
  return (
    <div>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={openModalUser}>Gerenciar meus dados</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </StyledMenu>
    </div>
  );
}
