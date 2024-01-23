// create apiSlice

import { createSlice } from "@reduxjs/toolkit";
import {
  createPermission,
  createRole,
  deletePermission,
  deleteRole,
  editRole,
  getUserPermission,
  getUserRoles,
  roleStatusUpdate,
  updatePermissionStatus,
} from "./userApiSlice";

const userSlice = createSlice({
  name: "user",
  initialState: {
    permission: null,
    role: null,
    user: null,
    message: null,
    error: null,
  },

  reducers: {
    setMessageEmpty: (state, action) => {
      (state.message = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getUserPermission.fulfilled, (state, action) => {
        state.permission = action.payload;
      })
      .addCase(createPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createPermission.fulfilled, (state, action) => {
        state.permission = state.permission ?? [];
        state.permission.push(action.payload.permission),
          (state.message = action.payload.message);
      })
      .addCase(deletePermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deletePermission.fulfilled, (state, action) => {
        state.permission = state.permission.filter(
          (data) => data._id !== action.payload.permission._id
        );
        state.message = action.payload.message;
      })
      .addCase(updatePermissionStatus.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updatePermissionStatus.fulfilled, (state, action) => {
        (state.permission[
          state.permission.findIndex(
            (data) => data._id === action.payload.permission._id
          )
        ] = action.payload.permission),
          (state.message = action.payload.message);
      })
      .addCase(getUserRoles.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getUserRoles.fulfilled, (state, action) => {
        state.role = action.payload;
      })
      .addCase(createRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createRole.fulfilled, (state, action) => {
        state.role = state.role ?? [];
        state.role.push(action.payload.role);
        state.message = action.payload.message;
      })
      .addCase(editRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(editRole.fulfilled, (state, action) => {
        state.role[
          state.role.findIndex((data) => data._id === action.payload.role._id)
        ] = action.payload.role;
        state.message = action.payload.message;
      })
      .addCase(roleStatusUpdate.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(roleStatusUpdate.fulfilled, (state, action) => {
        state.role[
          state.role.findIndex((data) => data._id === action.payload.role._id)
        ] = action.payload.role;
        state.message = action.payload.message;
      })
      .addCase(deleteRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteRole.fulfilled, (state, action) => {
        state.role = state.role.filter(
          (data) => data._id !== action.payload.role._id
        );
        state.message = action.payload.message;
      })
      
      ;
  },
});

//selectors
export const getAllPermission = (state) => state.user;
//actions
export const { setMessageEmpty } = userSlice.actions;
//export authSlice
export default userSlice.reducer;
