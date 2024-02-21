import React, { useEffect, useState } from "react";
import white_logo from "../../assets/img/logo-white.png";
import { Link, useNavigate } from "react-router-dom";
import { createToast } from "../../utils/createToast";
import { useDispatch, useSelector } from "react-redux";
import { loginSlice } from "../../Redux/Features/auth/authApiSlice";
import { setMessageEmpty } from "../../Redux/Features/auth/authSlice";


const Login = () => {
  // call dispatch for fetching data from server
  const dispatch = useDispatch();
  const { error, message, user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  // get input field data
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
 
  // confirm get input data and ready to send server
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle submit form
  const handleSubitLoginForm = (e) => {
    e.preventDefault();

    if (!input.email || !input.password) {
      createToast("All fields are required");
    } else {
      dispatch(loginSlice(input));
    }
  };

  // sending message to ui from ux
  useEffect(() => {
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }

    //  navigate to home page
   if(user){
    navigate("/")
   }
  }, [error, message, user]);

  

  return (
    <>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img src={white_logo} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to our dashboard</p>

                  {/* <!-- Form --> */}
                  <form onSubmit={handleSubitLoginForm}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={input.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={input.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  {/* form */}

                  <div className="text-center forgotpass">
                    <Link
                      to="/forgot-password"
                      onClick={() => handlealert(alert("Hello"))}
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>

                  <div className="text-center dont-have">
                    Don’t have an account? <Link to="/register">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
