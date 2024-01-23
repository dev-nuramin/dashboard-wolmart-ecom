import React from "react";
import useAuthHooks from "../../hooks/useAuthHooks";
import Clock from "../../helper/Clock/Clock";
import Greatings from "../../helper/Greating/Greatings";

const PageHeader = ({ title }) => {
  const { user } = useAuthHooks();
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <div className="greatings">
            <strong>{<Greatings />}</strong>
          </div>
          <div className="welcome_top_header_el">
            <div
              className="time_clock"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                alignItems: "center",
              }}
            >
              <h3 className="page-title">Welcome :- {user?.name}!</h3>
              <h6>
                <Clock />
              </h6>
            </div>
          </div>

          <ul className="breadcrumb">
            <li className="breadcrumb-item active">{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
