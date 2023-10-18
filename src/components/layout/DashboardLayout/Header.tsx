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
import useGetUser from "@/components/auth/Hooks/useGetUser";
import Cookies from "js-cookie";
import router from "next/router";

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { data: userInfo } = useGetUser();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    handleCloseUserMenu();
    Cookies.remove("tasks-management-userId");
    router.push("/login");
  };

  return (
    <AppBar
      className={styles.header}
      position="static"
      sx={{ backgroundColor: "ButtonShadow" }}
    >
      <Toolbar className={styles.flex}>
        <Typography variant="h6" component="div">
          <Link href="/home">
            <Avatar alt="logo" src="/imgs/logo.svg" />
          </Link>
        </Typography>

        <Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt={ userInfo?.firstName} src={userInfo?.avatar} />
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

            <MenuItem onClick={logout}>
              <Typography>LogOut</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
