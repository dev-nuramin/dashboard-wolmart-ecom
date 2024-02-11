import React, { useEffect, useState } from "react";
import DataTable from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPermission,
  setMessageEmpty,
} from "../../Redux/Features/user/userSlice";

import "../Permission/Permission.css";
import { timeAgo } from "../../utils/timesAgoFunc";
import useFormFields from "../../hooks/useFormFields";
import { createToast } from "../../utils/createToast";

const Brand = () => {
  const { permission, role, error, message } = useSelector(getAllPermission);

  const dispatch = useDispatch();

  const { input, handleInputChange, clearForms } = useFormFields({
    name: "",
  });

  // image preview
  const [logo, setLogo] = useState(null);

  const handlePreviewImg = (e) => {
    setLogo(URL.createObjectURL(e.target.files[0]))
  }
  
  // rendered data table
  useEffect(() => {
    new DataTable(".datatable");
  });

  return (
    <>
      <ModalPopup target="roleModalPopup" title="Add specialist">
        <form>
          <div className="my-3">
            <div className="Input_name">
              <h5>Brand Name</h5>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Brand Name"
              name="name"
              value={input.name}
              onChange="{handleInputChange}"
            />
          </div>

          <div className="my-3">
            <img className="w-100" src={logo} />
          </div>

          <div className="my-3">
            <div className="Input_name">
              <h5>Brand logo</h5>
            </div>
            <input
              type="file"
              className="form-control"
              placeholder="Brand Name"
              onChange={(e) => handlePreviewImg(e)}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Add new brand
          </button>
        </form>
      </ModalPopup>

      {/* Edit permission popup */}

      {/* <ModalPopup target="roleEdit" title="Edit specialist">
        <form onSubmit="{handleUpdateRole}">
          <label htmlFor="Role Name ">
            <div className="my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Role Name"
                name="name"
                value={roleEdit.name}
                onChange="{handleEditInputChange}"
              />
            </div>
            <h5>Permission</h5>
            <hr />
            {permission?.map((item, index) => {
              return (
                <label className="d-block" key={index}>
                  <input
                   style={{cursor: "pointer"}}
                    type="checkbox"
                    value={item.name}
                    checked={selected.includes(item.name)}
                    onClick={handleCheckUncheckList}
                  />{" "}
                  {item.name}
                </label>
              );
            })}
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            Edit role
          </button>
        </form>
      </ModalPopup> */}
      <PageHeader title="Brand" />
      <button
        className="btn btn-info my-3"
        data-target="#roleModalPopup"
        data-toggle="modal"
      >
        Edit brand
      </button>
    </>
  );
};

export default Brand;
