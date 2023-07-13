import Image from 'next/image'
import styles from "./AuthLayout.module.scss";

const AuthLayout = (props: { children: React.ReactNode }) => {

    const {children}=props;

  return (
    <div className={styles.authLayout}>
      <div><Image src="/imgs/auth.svg" alt="try" width={300} height ={400} /></div>
      <div className={styles.form}>{children}</div>
    </div>
  );
};

export default AuthLayout;
