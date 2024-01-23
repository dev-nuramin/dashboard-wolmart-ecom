import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import SinglePage from "../Pages/SinglaPage/SinglePage";


// create public route
const publicRoute = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/shop",
        element: <Shop />
    },
    {
        path: "/shop/:single",
        element: <SinglePage />
    }
];

// export route
export default publicRoute;