import React, { useEffect, useState } from 'react';
import { Divider, Menu, MenuItem } from '@mui/material';

import { Settings, Preferences, SignOut } from '../../Actions';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { loginuser } from '../../../Redux/action';

interface DefaultMenuProps {
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  anchorEl: HTMLElement | null;
}

export const DefaultMenu = ({ isMenuOpen, handleMenuClose, anchorEl }: DefaultMenuProps) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [values, setvalues] = useState({
    email: '',
    password: '',
    authError: ''
  });
  return (
  <Menu anchorEl={anchorEl} id="primary-search-account-menu" keepMounted open={isMenuOpen} onClose={handleMenuClose}>
    <MenuItem onClick={handleMenuClose}>
      <Settings disableTooltip />
      Settings
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <Preferences disableTooltip />
      Preferences
    </MenuItem>
    <Divider />
    <MenuItem onClick={() => {
      handleMenuClose()
      dispatch(loginuser({
        'username': undefined,
        'userId':undefined,
        'auth': false,
      }))
      history.push('/signin')

    }}>
      <SignOut disableTooltip />
      Sign Out
    </MenuItem>
  </Menu>
)};
