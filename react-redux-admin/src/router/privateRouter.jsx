
import PageLayout from "../components/PageLayout/PageLayout";
import User from "../components/User/User";
import Dashboad from "../pages/Dashboard/Dashboard";
import Role from "../pages/Role/Role";
import Permission from "../pages/Permission/Permission";
import PrivateGuard from "./PageGuard/PrivateGuard";

// create private route
const privateRoute = [
    {
        element : < PrivateGuard/>,
        children : [
            {
                element: <PageLayout />,
                children: [
                    {
                        path: "/",
                        element: <Dashboad />
                    },
                    {
                        path: '/user',
                        element: <User />
                    },
                    {
                        path: '/role',
                        element: <Role />
                    },
                    {
                        path: '/permission',
                        element: <Permission />
                    },
                ]
            },
        ]
    }
   
];

// export route
export default privateRoute;

