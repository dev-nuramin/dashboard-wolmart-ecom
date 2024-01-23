import { createBrowserRouter } from "react-router-dom";
import privateRoute from "./privateRouter";
import publicRoute from "./publicRouter";

// create browser router
const router = createBrowserRouter([...publicRoute, ...privateRoute])

// export browser router
export default router;