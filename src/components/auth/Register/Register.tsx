import { ChangeEvent, FormEvent, useState } from "react";
import {  TextField, Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Image from "next/image";
import { useRouter } from "next/router";
import useAddUser from "../Hooks/useAddUser";
import { UserInterface } from "@/shared/user.interface";
import { handleUserAccount } from "@/store/User/userSlice";
import { useAppDispatch } from "@/hooks/storeIndex";
import Link from "next/link";
import Cookies from "js-cookie";

const Register = () => {
  const router = useRouter();

  const { isLoading, mutateAsync: addUser } = useAddUser();

  const dispatch = useAppDispatch();

  const [values, setValues] = useState<UserInterface>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    id: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addUser(values).then((res: any) => {
      Cookies.set("tasks-management-userId", res?.data?.id);
      dispatch(handleUserAccount(values));
      router.push("/home");
    });
  };

  return (
    <Box
      sx={{
        my: 5,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image src="/imgs/logo.svg" alt="logo" width={50} height={50} />

      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="First Name"
          name="firstName"
          type="text"
          autoFocus
          onChange={handleChange}
        />
        <br />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Last Name"
          name="lastName"
          type="text"
          autoFocus
          onChange={handleChange}
        />
        <br />
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
          onChange={handleChange}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          style={{ marginBottom: "20px", marginTop: "20px" }}
          fullWidth
          disabled={isLoading}
          loading={isLoading}
        >
          Sign up
        </LoadingButton>
        <br />
        Have an account already?<Link href="/login"> Sign in </Link>
      </form>
    </Box>
  );
};

export default Register;
