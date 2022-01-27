import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { Hamburger } from './Hamburger';
import { Search } from './Search';
import { AppTitle } from './AppTitle';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Messages, More, Notifications, UserAccount, CloudUploadOutlined,Settings } from '../Actions';
import { DefaultMenu, MobileMenu, SettingMenu, UploadMenu } from './Menu';

interface HeaderProps {
  toggleNavigation: () => void;
}

export const Header = ({ toggleNavigation }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState<null | HTMLElement>(null);
  const [uploadMenu, setuploadMenu] = useState<null | HTMLElement>(null);


  // profile
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };



  // setting
  const handlesettingMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingMenuClose = () => {
    setSettingsAnchorEl(null);
    handleMobileMenuClose();
  };

  // upload
  const handleUploadMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setuploadMenu(event.currentTarget);
  };

  const handleUploadMenuClose = () => {
    setuploadMenu(null);
    handleMobileMenuClose();
  };


  // mobile menu
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setMobileMoreAnchorEl(event.currentTarget);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);


  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar disableGutters variant="dense">
          <Hamburger toggleNavigation={toggleNavigation} />
          <AppTitle />
          <Box sx={{ flexGrow: 1 }} />
          <Typography style={{ display: 'flex', alignItems: 'center' }}>
            <Search />
            <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
              <CloudUploadOutlined onClick={handleUploadMenuOpen} />
              <Notifications total={20} />
              <Settings onClick={handlesettingMenuOpen} />
            </Box>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
            <UserAccount onClick={handleProfileMenuOpen} />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <More onClick={handleMobileMenuOpen} />
          </Box>
        </Toolbar>
      </AppBar>
      <MobileMenu
        isMenuOpen={Boolean(mobileMoreAnchorEl)}
        handleMenuOpen={handleMobileMenuOpen}
        handleMenuClose={handleMobileMenuClose}
        anchorEl={mobileMoreAnchorEl}
      />
      <DefaultMenu isMenuOpen={Boolean(anchorEl)} handleMenuClose={handleMenuClose} anchorEl={anchorEl} />
      <SettingMenu isMenuOpen={Boolean(settingsAnchorEl)} handleMenuClose={handleSettingMenuClose} anchorEl={settingsAnchorEl} />
      <UploadMenu isMenuOpen={Boolean(uploadMenu)} handleMenuClose={handleUploadMenuClose} anchorEl={uploadMenu} />
    </>
  );
};
