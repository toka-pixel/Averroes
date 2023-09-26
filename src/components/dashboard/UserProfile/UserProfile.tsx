import { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Avatar,
  Grid,
  Typography,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import styles from "./UserProfile.module.scss";

const UserProfile = () => {
  const [userName, setUserName] = useState<any>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserName(localStorage?.getItem("user-name"));
    }
  }, []);

  return (
    <div className={styles.userProfile}>
      <Typography variant="h6" component="div" className={styles.user}>
        <Avatar alt="logo" src="/imgs/user.jpg" />
        <Edit className={styles.edit} />
      </Typography>
      {userName && userName}
      <Box component="form">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              id="Name"
              label="Name"
              name="Name"
              autoFocus
              className={styles.input}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              name="Age"
              label="Age"
              id="Age"
              autoComplete="Age"
              className={styles.input}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              name="New Password"
              label="New Password"
              id="New Password"
              className={styles.input}
              fullWidth
              type="password"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              name="Enter New Password Again"
              label="Enter New Password Again"
              id="Enter New Password Again"
              className={styles.input}
              fullWidth
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              name="Email"
              label="Email"
              id="Email"
              fullWidth
            />
          </Grid>
        </Grid>

        <br />
        <br />

        <Button
          type="submit"
          variant="contained"
          className="purpleButton width-10"
        >
          Save
        </Button>

        <Button
          type="submit"
          variant="contained"
          className="redButton width-10 ml-10"
        >
          Delete
        </Button>
      </Box>
      <br />
    </div>
  );
};

export default UserProfile;
