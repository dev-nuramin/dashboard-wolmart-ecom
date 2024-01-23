import ForgotPassword from "../pages/Auth/ForgotPassword";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PublicGuard from "./PageGuard/PublicGuard";

// create public route
const publicRoute = [
    {
        element : < PublicGuard/>,
        children : [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            },
        ]
    }
];

// export route
export default publicRoute;