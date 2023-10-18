import Image from "next/image";
import {Grid,Paper} from "@mui/material";
import Home from "@/components/dashboard/Home/Home";
import styles from "./AuthLayout.module.scss";
import Cookies from "js-cookie";

const AuthLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  // if (!Cookies.get("tasks-management-userId")) {
  //   return <Home />;
  // }

  return (
    <div>
      <Grid container component="main" className={styles.authLayout}>
        <Grid item xs={false} sm={2} md={6} className={styles.leftSide}>
          <Image src="/imgs/auth.svg" alt="auth" width={400} height={500} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={10}
          md={6}
          component={Paper}
          elevation={6}
          square
          className={styles.form}
          container
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default AuthLayout;
