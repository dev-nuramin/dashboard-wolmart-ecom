import React from 'react'
import { Link } from 'react-router-dom'
import "boxicons/css/boxicons.min.css"
const Sidebar = () => {
  return (
    <>
     <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className="">
                  <Link to="/">
                    <i className="fe fe-home"></i> <span>Dashboard</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/">
                    <i className="fe fe-bolt"></i> <span>Products</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/">
                    <i className="fe fe-bolt"></i> <span>Brands</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/">
                    <i className="fe fe-bolt"></i> <span>Tags</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/">
                    <i className="fe fe-bolt"></i> <span>Category</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/user">
                    <i className="fe fe-user"></i> <span>User</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/role">
                  <i className='bx bx-anchor'></i> <span>Role</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/permission">
                    <i className="bx bx-lock-alt"></i> <span>Permission</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default Sidebar