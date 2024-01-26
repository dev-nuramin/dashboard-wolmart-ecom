import Blog from "../Pages/Blog/Blog";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
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
    ,
    {
        path: "/cart",
        element: <Cart/>
    }
    ,
    {
        path: "/blog",
        element: <Blog />
    }
    ,
    {
        path: "/checkout",
        element: <Checkout />
    }
];

// export route
export default publicRoute;