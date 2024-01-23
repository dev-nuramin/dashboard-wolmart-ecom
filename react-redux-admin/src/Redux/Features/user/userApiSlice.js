import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get user permission slice
export const getUserPermission = createAsyncThunk(
  "user/getUserPermission",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/permission",
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// create user permission slice
export const createPermission = createAsyncThunk(
  "user/createPermission",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/permission",
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// delete user permission slice
export const deletePermission = createAsyncThunk(
  "user/deletePermission",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/permission/${id}`,
        
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// update user permission status slice
export const updatePermissionStatus = createAsyncThunk(
  "user/updatePermissionStatus",
  async ({status, id}) => {
    try {
      const response = await axios.put(
        `http://localhost:5050/api/v1/permission/status/${id}`,
         {status},
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get all user role slice
export const getUserRoles = createAsyncThunk(
  "user/getUserRoles",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/role",
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// create user role slice
export const createRole = createAsyncThunk(
  "user/createRole",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/role",
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);


// edit user role slice
export const editRole = createAsyncThunk(
  "user/editRole",
  async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:5050/api/v1/role/${data.id}`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// update user role status slice
export const roleStatusUpdate = createAsyncThunk(
  "user/roleStatusUpdate",
  async ({status, id}) => {
    
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/role/status/${id}`,
         {status},
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);


// delete user permission slice
export const deleteRole = createAsyncThunk(
  "user/deleteRole",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/role/${id}`,
        
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);