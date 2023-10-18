import { Edit } from "@mui/icons-material";
import {
  Typography,
  Avatar,
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
} from "@mui/material";
import React from "react";
import styles from "./UserProfile.module.scss";
import { UserInterface } from "@/shared/user.interface";
import { useForm, Controller } from "react-hook-form";
import useGetUser from "@/components/auth/Hooks/useGetUser";

interface UserFormProps {
  defaultValues?: UserInterface;
  onSubmit: (data: UserInterface) => void;
}

const UserForm: React.FC<UserFormProps> = ({ defaultValues, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInterface>({ defaultValues });

  return (
    <div className={styles.userProfile}>
      <Typography variant="h6" component="div" className={styles.user}>
        <Avatar
          sx={{ width: "80px", height: "80px" }}
          alt="logo"
          src={defaultValues?.avatar}
        />
        <Edit className={styles.edit} />
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="First Name"
              // className={styles.input}
              fullWidth
              {...register("firstName", { required: true })}
              error={!!errors.firstName}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Last Name"
              fullWidth
              {...register("lastName", { required: true })}
              error={!!errors.lastName}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Job Title"
              // className={styles.input}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Country"
              // className={styles.input}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              {...register("email", { required: true })}
              error={!!errors.email}
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
          className=" width-10 ml-10"
          sx={{ background: "gray" }}
        >
          Cancel
        </Button>
      </form>
      <br />
    </div>
  );
};

export default UserForm;
