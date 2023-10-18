import Home from "@/components/dashboard/Home/Home";
import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";
import { GetServerSideProps } from "next";

const IndexHome = () => {


  return (
    <DashboardLayout>
      <Home />
    </DashboardLayout>
  );
};
export default IndexHome;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { req } = context;
//   const cookieValue = req.cookies["tasks-management-userId"];

//   return {
//     props: {
//       cookieValue,
//     },
//   };
// };
