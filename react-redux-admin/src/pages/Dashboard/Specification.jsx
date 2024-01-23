import React, { useEffect } from "react";
import DataTable from 'datatables.net-dt';
import sp1 from '../../assets/img/specialities/specialities-01.png';

const Specification = () => {
    useEffect(() => {
     new DataTable(".datatable");
    })
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="datatable table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Specialities</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#SP001</td>

                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img"
                              src={sp1}
                              alt="Speciality"
                            />
                          </a>
                          <a href="profile.html">Urology</a>
                        </h2>
                      </td>

                      <td className="text-right">
                        <div className="actions">
                          <a
                            className="btn btn-sm bg-success-light"
                            data-toggle="modal"
                            href="#edit_specialities_details"
                          >
                            <i className="fe fe-pencil"></i> Edit
                          </a>
                          <a
                            data-toggle="modal"
                            href="#delete_modal"
                            className="btn btn-sm bg-danger-light"
                          >
                            <i className="fe fe-trash"></i> Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#SP002</td>

                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img"
                              src={sp1}
                              alt="Speciality"
                            />
                          </a>
                          <a href="profile.html">Neurology</a>
                        </h2>
                      </td>

                      <td className="text-right">
                        <div className="actions">
                          <a
                            className="btn btn-sm bg-success-light"
                            data-toggle="modal"
                            href="#edit_specialities_details"
                          >
                            <i className="fe fe-pencil"></i> Edit
                          </a>
                          <a
                            data-toggle="modal"
                            href="#delete_modal"
                            className="btn btn-sm bg-danger-light"
                          >
                            <i className="fe fe-trash"></i> Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#SP003</td>

                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img"
                              src={sp1}
                              alt="Speciality"
                            />
                          </a>
                          <a href="profile.html">Orthopedic</a>
                        </h2>
                      </td>

                      <td className="text-right">
                        <div className="actions">
                          <a
                            className="btn btn-sm bg-success-light"
                            data-toggle="modal"
                            href="#edit_specialities_details"
                          >
                            <i className="fe fe-pencil"></i> Edit
                          </a>
                          <a
                            data-toggle="modal"
                            href="#delete_modal"
                            className="btn btn-sm bg-danger-light"
                          >
                            <i className="fe fe-trash"></i> Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#SP004</td>

                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img"
                              src={sp1}
                              alt="Speciality"
                            />
                          </a>
                          <a href="profile.html">Cardiologist</a>
                        </h2>
                      </td>

                      <td className="text-right">
                        <div className="actions">
                          <a
                            className="btn btn-sm bg-success-light"
                            data-toggle="modal"
                            href="#edit_specialities_details"
                          >
                            <i className="fe fe-pencil"></i> Edit
                          </a>
                          <a
                            data-toggle="modal"
                            href="#delete_modal"
                            className="btn btn-sm bg-danger-light"
                          >
                            <i className="fe fe-trash"></i> Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#SP005</td>

                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img"
                              src={sp1}
                              alt="Speciality"
                            />
                          </a>
                          <a href="profile.html">Dentist</a>
                        </h2>
                      </td>

                      <td className="text-right">
                        <div className="actions">
                          <a
                            className="btn btn-sm bg-success-light"
                            data-toggle="modal"
                            href="#edit_specialities_details"
                          >
                            <i className="fe fe-pencil"></i> Edit
                          </a>
                          <a
                            className="btn btn-sm bg-danger-light"
                            data-toggle="modal"
                            href="#delete_modal"
                          >
                            <i className="fe fe-trash"></i> Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specification;
