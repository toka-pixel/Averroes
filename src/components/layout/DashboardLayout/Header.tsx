import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className={styles.header} position="static">
      <Toolbar className={styles.flex}>
        <Typography variant="h6" component="div">
          <Avatar alt="logo" src="/imgs/logo.svg" />
        </Typography>

        <Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt="Remy Sharp" src="/imgs/user.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Link href={"user-profile"}>
                <Typography>user-profile</Typography>
              </Link>
            </MenuItem>

            <MenuItem onClick={handleCloseUserMenu}>
              <Typography>LogOut</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
