import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import white_logo from "../../assets/img/logo-white.png";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterSlice } from "../../Redux/Features/auth/authApiSlice";
import { sweetAlertStandard } from "../../helper/sweetAlert.js";
import { createToast } from "../../utils/createToast";
import { setMessageEmpty } from "../../Redux/Features/auth/authSlice";
const Register = () => {
  // call use dispatch foe data fetching with axios
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  // get input field data
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
    cpassword: "",
  });

  // confirm get input data and ready to send server
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // now submit form for sending data to server
  const handleSubmitRegForm = (e) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.password || !input.cpassword) {
     
      // createToast('All fields are required', 'error')
    }
    if (input.password !== input.cpassword) {
      createToast('Password not match', 'error')
    } else {
      dispatch(
        userRegisterSlice({
          name: input.name,
          email: input.email,
          password: input.password,
        }),

        setInput({
          email: "",
          password: "",
          name: "",
          cpassword: "",
        }),
        navigate('/login')
      );
    }
  };

  useEffect(() => {
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
    if (message) {
      createToast(message, 'success');
      dispatch(setMessageEmpty());
    }
  }, [error, message]);
  return (
    <>
      {/* <!-- Main Wrapper --> */}
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img src={white_logo} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Register</h1>
                  <p className="account-subtitle">Access to our dashboard</p>

                  {/* <!-- Form --> */}
                  <form onSubmit={handleSubmitRegForm}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                      />
                    </div>
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
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Confirm Password"
                        name="cpassword"
                        value={input.cpassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group mb-0">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  {/* <!-- /Form --> */}

                  <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>

                  <div className="text-center dont-have">
                    Already have an account? <Link to="/login">Login</Link>
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

export default Register;
