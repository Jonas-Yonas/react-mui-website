import { Mail, Notifications } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import { images } from '../constants';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled('div')(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '16px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const open = Boolean(toggle);
  const handleClick = (event) => {
    setToggle(event.currentTarget);
  };
  const handleClose = () => {
    setToggle(false);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Logo goes here
        </Typography> */}
        <Box>
          <img
            src={images.logo4}
            alt="logo"
            style={{ width: '60px', height: '55px' }}
          />
        </Box>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={8} color="error">
            <Mail />
          </Badge>

          <Badge badgeContent={5} color="error">
            <Notifications />
          </Badge>

          <Avatar
            sx={{ width: 30, height: 30, cursor: 'pointer' }}
            src={images.me}
            onClick={handleClick}
          />
        </Icons>

        <UserBox onClick={handleClick}>
          <Avatar sx={{ width: 30, height: 30 }} src={images.me} />
          <Typography variant="span">Jonas</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="menu-item"
        aria-labelledby="btn-menu-item"
        anchorEl={toggle}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
