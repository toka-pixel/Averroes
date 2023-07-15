import Header from "./Header";

const DashboardLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <br/>
      <div className="container">{children}</div>
    </div>
  );
};

export default DashboardLayout;
