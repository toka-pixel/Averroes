import { CircularProgress } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRouteMiddleware= (
  WrappedComponent: React.FC<any>
) => {
  //  const hocComponent: React.FC<any> = (props) => {
    const router = useRouter();
    const isAuthenticated = Cookies.get("tasks-management-userId");
    

    useEffect(() => {
      if (!isAuthenticated) {
        // router.push("/login");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
     return  <CircularProgress sx={{display:'flex',justifyContent:'center','alignItems':'center'}} />
      // return <div>Loading...</div>;
    }

    return <WrappedComponent />;
  // };

  //  return hocComponent;
};

export default ProtectedRouteMiddleware;
