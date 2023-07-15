import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "./AuthLayout.module.scss";

const AuthLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;

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
