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
import { createRole, deleteRole, editRole, roleStatusUpdate} from "../../Redux/Features/user/userApiSlice";

const Role = () => {
  const { permission, role, error, message } = useSelector(getAllPermission);

  const dispatch = useDispatch();

  const { input, handleInputChange, clearForms } = useFormFields({
    name: "",
  });

  // use state for getting data from checklist
  const [selected, setSelected] = useState([]);

  // click to get data from checklist
  const handleCheckUncheckList = (e) => {
    const val = e.target.value;
    const updateList = [...selected];

    if (selected.includes(val)) {
      updateList.splice(selected.indexOf(val), 1);
    } else {
      updateList.push(val);
    }
    setSelected(updateList);
  };

  // handle set alert message

  useEffect(() => {
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message, dispatch]);

  // create role handler
  const handleCreateRole = (e) => {
    e.preventDefault();
    dispatch(
      createRole({
        name: input.name,
        permissions: [...selected],
      })
    );
    clearForms(), setSelected([]);
  };

  // edit role start
  // edit permission from modal
  const [roleEdit, setRoleEdit] = useState({});

  // geting id for edit permission
  const handleInputEditChange = (id) => {
    const editData = role.find((user) => user._id === id);
    setRoleEdit(editData);
    setSelected(editData.permissions)
  };

  // input fields data change
  const handleEditInputChange = (e) => {
    setRoleEdit((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))
  };

  const handleUpdateRole = (e) => {
    e.preventDefault();
   
    dispatch(editRole({
      id: roleEdit._id,
      name: roleEdit.name,
      permissions: selected
    }))
  }
  //Edit role End
  // update status start
  const handleUpdateStatus = (status, id) => {
    dispatch(roleStatusUpdate({status, id}))
   
  };
  // updat status end
  //delete role start
  const handleDeleteRole = (id) => {
    swal({
      title: "Are you sure",
      text: "This will delete your data",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteRole(id));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }
  // rendered data table
  useEffect(() => {
    new DataTable(".datatable");
  });

  return (
    <>
      <ModalPopup target="roleModalPopup" title="Add specialist">
        <form onSubmit={handleCreateRole}>
          <label htmlFor="Role Name ">
            <div className="my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Role Name"
                name="name"
                value={input.name}
                onChange={handleInputChange}
              />
            </div>
            <h5>Permission</h5>
            <hr />
            {permission?.map((item, index) => {
              return (
                <label className="d-block" key={index}>
                  <input
                    type="checkbox"
                    value={item.name}
                    checked={selected?.includes(item.name)}
                    onClick={handleCheckUncheckList}
                  />{" "}
                  {item.name}
                </label>
              );
            })}
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            Add new Permission
          </button>
        </form>
      </ModalPopup>

      {/* Edit permission popup */}

      <ModalPopup target="roleEdit" title="Edit specialist">
        <form onSubmit={handleUpdateRole}>
          <label htmlFor="Role Name ">
            <div className="my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Role Name"
                name="name"
                value={roleEdit.name}
                onChange={handleEditInputChange}
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
      </ModalPopup>
      <PageHeader title="Role" />

      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-info my-3"
            data-target="#roleModalPopup"
            data-toggle="modal"
          >
            Add new role
          </button>

          <div className="card card-table">
            <div className="card-header">
              <h4 className="card-title">Appointment List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                {role && (
                  <table className="table table-hover table-center mb-0 datatable">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Role Name</th>
                        <th>Slug</th>
                        <th>Role</th>
                        <th>Created at</th>
                        <th>Edited at</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...role].reverse().map((data, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.slug}</td>
                            <td>
                              <ul style={{ listStyle: "none" }}>
                                {data.permissions.map((item, index) => {
                                  return <li key={index}>{item}</li>;
                                })}
                              </ul>
                            </td>

                            <td>{timeAgo(data.createdAt)}</td>
                            <td>{timeAgo(data.updatedAt)}</td>
                            <td>
                              <div className="status-toggle">
                                <input
                                  type="checkbox"
                                  id="status_1"
                                  className="check"
                                  checked={data.status ? true : false}
                                />
                                <label
                                 onClick={() => handleUpdateStatus(data.status, data._id)}
                                  htmlFor="status_1"
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <td>
                              <button
                                className="btn btn-warning btn-sm mr-1"
                                data-toggle="modal"
                                data-target="#roleEdit"
                                onClick={() => handleInputEditChange(data._id)}
                              >
                                <i className="fe fe-edit"></i>
                              </button>
                              <button className="btn btn-danger btn-sm"
                              onClick={() => handleDeleteRole(data._id)}
                              >
                                <i className="fe fe-trash"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>

          <label htmlFor=""></label>
        </div>
      </div>
    </>
  );
};

export default Role;
