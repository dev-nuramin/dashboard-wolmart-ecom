import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get brand slice
export const getAllBrand = createAsyncThunk(
  "product/getAllBrand",

  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/brands",
         
        {
          withCredentials: true,
        }
      );
      //   return response.data;
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// create brand slice
export const createBrand = createAsyncThunk(
  "product/createBrand",

  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/brands",
        data,
        {
          withCredentials: true,
        }
      );
      //   return response.data;
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete brand slice
export const deleteBrand = createAsyncThunk(
  "product/deleteBrand",

  async (id) => {
   
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/brands/${id}`,
        {
          withCredentials: true,
        }
      );
      //   return response.data;
      return response.data
      
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
