import { RouterProvider } from "react-router-dom";
import router from "./router/routers";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "./Redux/Features/auth/authApiSlice";
import { getUserPermission, getUserRoles } from "./Redux/Features/user/userApiSlice";




function App() {

  const dispatch = useDispatch();

  //useeffect for rendering all data
  useEffect(() => {
    dispatch(getUserPermission())
    dispatch(getUserRoles());
  }, [dispatch]);



  useEffect(() => {
    if(localStorage.getItem('user')){
      dispatch(getLoggedInUser());
    }
    
  }, [dispatch]);

   
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
