import { ChangeEvent, FormEvent, useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Image from "next/image";
import { useRouter } from "next/router";
import useGetAllUsers from "../Hooks/useGetAllUsers";
import { UserInterface } from "@/shared/user.interface";
import { showNotification } from "@/utils/utils";
import { handleUserAccount } from "@/store/User/userSlice";
import Cookies from "js-cookie";
import { useAppDispatch } from "@/hooks/storeIndex";
import Link from "next/link";

function Login() {
  const router = useRouter();

  const { isLoading, data } = useGetAllUsers();

  const [values, setValues] = useState({ email: "", password: "" });

  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const checkLogin = data?.filter(
      (user: UserInterface) =>
        user.email === values.email && user.password === values.password
    );

    if (checkLogin.length > 0) {
      // localStorage.setItem(
      //   "tasks-management",
      //   JSON.stringify({
      //     name: values?.email.split("@")[0],
      //     userId: checkLogin[0]?.id,
      //   })
      // );
      Cookies.set("tasks-management-userId", checkLogin[0]?.id);

      delete checkLogin[0]?.createdAt;
      dispatch(handleUserAccount(checkLogin[0]));
      router.push("/home");
    } else {
      showNotification("email or password incorrect", "error");
    }
  };

  return (
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
        <br />
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
        <LoadingButton
          type="submit"
          variant="contained"
          style={{ marginBottom: "20px", marginTop: "20px" }}
          fullWidth
          loading={isLoading}
          disabled={isLoading}
        >
          sign in
        </LoadingButton>
        <br />
        Don't have an account?
        <Link href="/register"> Sign up</Link>
      </form>
    </Box>
  );
}

export default Login;
