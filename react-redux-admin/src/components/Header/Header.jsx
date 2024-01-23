import React from "react";
import profile_1 from "../../assets/img/profiles/avatar-01.jpg";
import topLogo from "../../assets/img/logo.png";
import doc from "../../assets/img/doctors/doctor-thumb-01.jpg";
// import useDropdownControlHooks from "../../hooks/useDropdownControlHooks";
import patient from "../../assets/img/patients/patient1.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Redux/Features/auth/authApiSlice";
import useAuthHooks from "../../hooks/useAuthHooks";


const Header = () => {
 

 const {user} = useAuthHooks()
 const dispatch = useDispatch()
 const navigate = useNavigate()
 
  const handleLogoutUser = (e) => {
   e.preventDefault()
   dispatch(logoutUser())
   navigate("/login")
  }
  return (
    <>
      <div className="header">
        <div className="header-left">
          <a href="index.html" className="logo">
            <img src={topLogo} alt="Logo" />
          </a>
          <a href="index.html" className="logo logo-small">
            <img
              src="assets/img/logo-small.png"
              alt="Logo"
              width="30"
              height="30"
            />
          </a>
        </div>

        <a href="#" id="toggle_btn">
          <i className="fe fe-text-align-left"></i>
        </a>

        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        <a className="mobile_btn" id="mobile_btn">
          <i className="fa fa-bars"></i>
        </a>

       

        <ul class="nav user-menu">
          <li class="nav-item dropdown noti-dropdown">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="fe fe-bell"></i> <span class="badge badge-pill">3</span>
            </a>
            <div class="dropdown-menu notifications">
              <div class="topnav-dropdown-header">
                <span class="notification-title">Notifications</span>
                <a href="javascript:void(0)" class="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div class="noti-content">
                <ul class="notification-list">
                  <li class="notification-message">
                    <a href="#">
                      <div class="media">
                        <span class="avatar avatar-sm">
                          <img
                            class="avatar-img rounded-circle"
                            alt="User Image"
                            src={doc}
                          />
                        </span>
                        <div class="media-body">
                          <p class="noti-details">
                            <span class="noti-title">Dr. Ruby Perrin</span>{" "}
                            Schedule{" "}
                            <span class="noti-title">her appointment</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">4 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="#">
                      <div class="media">
                        <span class="avatar avatar-sm">
                          <img
                            class="avatar-img rounded-circle"
                            alt="User Image"
                            src={patient}
                          />
                        </span>
                        <div class="media-body">
                          <p class="noti-details">
                            <span class="noti-title">Charlene Reed</span> has
                            booked her appointment to{" "}
                            <span class="noti-title">Dr. Ruby Perrin</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">6 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="#">
                      <div class="media">
                        <span class="avatar avatar-sm">
                          <img
                            class="avatar-img rounded-circle"
                            alt="User Image"
                            src={patient}
                          />
                        </span>
                        <div class="media-body">
                          <p class="noti-details">
                            <span class="noti-title">Travis Trimble</span> sent
                            a amount of $210 for his{" "}
                            <span class="noti-title">appointment</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">8 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="#">
                      <div class="media">
                        <span class="avatar avatar-sm">
                          <img
                            class="avatar-img rounded-circle"
                            alt="User Image"
                            src={patient}
                          />
                        </span>
                        <div class="media-body">
                          <p class="noti-details">
                            <span class="noti-title">Carl Kelly</span> send a
                            message{" "}
                            <span class="noti-title"> to his doctor</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">12 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="topnav-dropdown-footer">
                <a href="#">View all Notifications</a>
              </div>
            </div>
          </li>

          <li class="nav-item dropdown has-arrow">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <span class="user-img">
                <img
                  class="rounded-circle"
                  src={user?.photo ? user.photo : "https://th.bing.com/th/id/OIP.FPUpHLVgDsBeEYFhhgs6BgHaHa?rs=1&pid=ImgDetMain"}
                  width="31"
                  alt={user?.name}
                />
              </span>
            </a>
            <div class="dropdown-menu">
              <div class="user-header">
                <div class="avatar avatar-sm">
                  <img
                    src={user?.photo ? user.photo : 'https://th.bing.com/th/id/OIP.FPUpHLVgDsBeEYFhhgs6BgHaHa?rs=1&pid=ImgDetMain'}
                    alt={user?.name}
                    class="avatar-img rounded-circle"
                  />
                </div>
                <div class="user-text">
                  <h6>{user?.name}</h6>
                  <p class="text-muted mb-0">{user?.role}</p>
                </div>
              </div>
              <a class="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a class="dropdown-item" href="settings.html">
                Settings
              </a>
              <a class="dropdown-item" onClick={handleLogoutUser} href="">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
