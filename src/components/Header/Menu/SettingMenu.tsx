import { Menu, MenuItem } from '@mui/material';
import { Settings, Preferences } from '../../Actions';
import { ThemeSwitcher } from '../ThemeSwitcher';

interface SettingMenuProps {
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  anchorEl: HTMLElement | null;
}

export const SettingMenu = ({ isMenuOpen, handleMenuClose, anchorEl }: SettingMenuProps) => (
  <Menu anchorEl={anchorEl} id="primary-search-account-menu" keepMounted open={isMenuOpen} onClose={handleMenuClose}>
    <MenuItem onClick={handleMenuClose}>
      <Settings disableTooltip />
      Settings
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <Preferences disableTooltip />
      Help
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <ThemeSwitcher />
      Dark
    </MenuItem>
  </Menu>
);
