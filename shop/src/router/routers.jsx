import { createBrowserRouter } from "react-router-dom";
import privateRoute from "./privateRouter";
import publicRoute from "./publicRouter";
import Layouts from "../Layouts/Layouts";

// create browser router
const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [...publicRoute, ...privateRoute],
  },
]);

// export browser router
export default router;
