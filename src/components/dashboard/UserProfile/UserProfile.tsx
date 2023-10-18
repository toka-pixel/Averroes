
import UserForm from "./UserForm";
import styles from "./UserProfile.module.scss";
import useGetUser from "@/components/auth/Hooks/useGetUser";


const UserProfile = () => {


  const { data: userInfo } = useGetUser();

  return (
    <div className={styles.userProfile}>
   
      <UserForm onSubmit={()=>{} } defaultValues={userInfo} />
    </div>
  );
};

export default UserProfile;
