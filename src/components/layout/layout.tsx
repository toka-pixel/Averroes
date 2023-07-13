import { useRouter } from "next/router";
import DashboardLayout from "./DashboardLayout/DashboardLayout";

const Layout = (props: { children: React.ReactNode }) => {
    const router = useRouter();

    return (
        <div>
            {`${router.pathname}`.startsWith("/dashboard") ? (

                <DashboardLayout> {props.children}</DashboardLayout>

            ) : (
                props.children
            )}
        </div>
    );
};

export default Layout;
