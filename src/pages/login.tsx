
import { Suspense } from "react";
import Login from "@/components/auth/Login/Login";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";

const Index = () => {
  return (
    <AuthLayout>
      
      <Login />
    </AuthLayout>
  );
};
export default Index;
