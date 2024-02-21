import React, { useEffect, useState } from "react";
// import DataTable from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import { useDispatch, useSelector } from "react-redux";
import "../Permission/Permission.css";
import DataTable from "react-data-table-component";
import { timeAgo } from "../../utils/timesAgoFunc";
import useFormFields from "../../hooks/useFormFields";
import {
  createBrand,
  deleteBrand,
} from "../../Redux/Features/product/productApiSlice";
import { setMessageEmpty } from "../../Redux/Features/product/productSlice";
import { createToast } from "../../utils/createToast";
import swal from "sweetalert";
const Brand = () => {
  // data table show
  const cols = [
    {
      name: "Brand name",
      selector: (row) => row.name,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
    },
    {
      name: "Created at",
      selector: (row) => timeAgo(row.createdAt),
    },
    {
      name: "Status",
      selector: (row) => (
        <div className="status-toggle">
          <input
            type="checkbox"
            id="status_1"
            className="check"
            checked="checked"
          />
          <label
            // onClick={() => handleUpdateStatus(brand.status, brand._id)}
            htmlFor="status_1"
            className="checktoggle"
          >
            checkbox
          </label>
        </div>
      ),
    },
    {
      name: "Photo",
      selector: (row) => (
        <img
          src={row.logo}
          alt="Brand image"
          style={{ width: "40px", height: "40px", objectFit: "cover" }}
        />
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <tr>
          <button
            className="btn btn-sm btn-danger mr-2"
            onClick={() => handleDeleteBrand(row._id)}
          >
            <i className="fe fe-trash"></i>
          </button>

          <button className="btn btn-sm btn-warning">
            <i className="fe fe-edit"></i>
          </button>
        </tr>
      ),
    },
  ];
  // data table end

  // start loading function before rendering table data show
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(rows);
      setPending(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  // end of loading function before rendering table data show

  // get data from redux
  const { error, message, brand, loader } = useSelector(
    (state) => state.product
  );

  // start delete brand function
  const handleDeleteBrand = (id) => {
    swal({
      title: "Are you sure",
      text: "If you run this action! will delete this brand",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBrand(id));
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  // end of delete brand function

  // call redux function
  const dispatch = useDispatch();
  // end of call redux dispatch function

  // input data changes
  const { input, handleInputChange, clearForms } = useFormFields({
    name: "",
  });
  // end data input changes

  // start image preview
  const [logo, setLogo] = useState(null);
  const [logoPrev, setLogoPrev] = useState(null);

  const handlePreviewImg = (e) => {
    setLogo(e.target.files[0]);

    setLogoPrev(URL.createObjectURL(e.target.files[0]));
  };
  // end of image preview function

  // create brand
  const handleCreateBrand = (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append("name", input.name);
    form_data.append("logo", logo);

    dispatch(createBrand(form_data));
    clearForms();
    setLogoPrev(null);
  };
  // end of create brand

  // set message form backend to frontend
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
  // end of message function

  // set search state hooks
  const [search, setSearch] = useState("");
  const handleSearch = (value) => {
    setSearch(value);
  };
  // end of search state hooks

  // rendered data table
  // useEffect(() => {
  //   new DataTable(".datatable");
  // });

  return (
    <>
      <ModalPopup target="brandModalPopup" title="Add brand">
        <form onSubmit={handleCreateBrand}>
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
              onChange={handleInputChange}
            />
          </div>

          <div className="my-3">
            <img className="w-100" src={logoPrev} />
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
            {loader ? "Data creating..." : "Add new brand"}
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
        data-target="#brandModalPopup"
        data-toggle="modal"
      >
        Edit brand
      </button>
      <DataTable
        title="All brands data"
        pagination
        highlightOnHover
        columns={cols}
        data={rows && brand ? brand : []}
        subHeader
        fixedHeader
        pointerOnHover
        selectableRows
        progressPending={pending}
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            style={{ width: "200px" }}
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        }
      />
    </>
  );
};

export default Brand;
