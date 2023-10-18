import { useEffect } from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Login from "@/components/auth/Login/Login";

const DashboardLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const router = useRouter();
  const isAuthenticated = Cookies.get("tasks-management-userId");
  // useEffect(() => {
  //   if (
  //     // typeof window !== "undefined" &&
  //     // localStorage?.getItem("tasks-management") == null
  //     !isAuthenticated
  //   ) {
  //     router.push("/login");
  //   }
  // }, []);

  return (
    <Box>
      <Header />
      <br />
      <Box sx={{ paddingBottom: "60px" }} className="container">
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
