
import Header from "./Header";


const DashboardLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;


  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout;
