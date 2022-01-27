import { Menu, MenuItem } from '@mui/material';
import { Settings, Preferences } from '../../Actions';
import { ThemeSwitcher } from '../ThemeSwitcher';

interface UploadMenuProps {
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  anchorEl: HTMLElement | null;
}

export const UploadMenu = ({ isMenuOpen, handleMenuClose, anchorEl }: UploadMenuProps) => (
  <Menu anchorEl={anchorEl} id="primary-search-account-menu" keepMounted open={isMenuOpen} onClose={handleMenuClose}>
    <MenuItem onClick={handleMenuClose}>
      <Settings disableTooltip />
      Upload
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <Preferences disableTooltip />
      create Channel
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <ThemeSwitcher />
      Sync Channel
    </MenuItem>
  </Menu>
);
