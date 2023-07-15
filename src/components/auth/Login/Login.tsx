import { useState } from "react";

import { Button, TextField, Box, Typography } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

function Login() {
  const router = useRouter();

  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push("/home");
    localStorage.setItem("user-name", values?.email.split("@")[0]);
  };

  return (
    <div className={styles.login}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image src="/imgs/logo.svg" alt="logo" width={50} height={50} />

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            autoFocus
            className={"textField"}
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className={"textField"}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            style={{ marginBottom: "20px", marginTop: "20px" }}
            className="purpleButton"
            fullWidth
          >
            Login
          </Button>

          <br />

          <Button
            type="submit"
            variant="contained"
            className="yellowButton"
            fullWidth
          >
            Signup
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Login;
