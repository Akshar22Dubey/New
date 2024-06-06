import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
//import  {toast} from 'react-toastify';
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password, role }, { rejectWithValue }) => {
    try {
      const { data } = await API.post(
        "https://new-emxx.onrender.com/auth/login",
        { role, email, password }
      );
      //store token
      if (data.success) {
        localStorage.setItem("token", data.token);
        // toast.success(data.message)
        alert("User login succesfully");
        window.location.replace("/");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        console.log("firstone");
        return rejectWithValue(error.response.data.message);
      } else {
        console.log("secondone");
        return rejectWithValue(error.message);
      }
    }
  }
);

//register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalname,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post(
        "https://new-emxx.onrender.com/auth/register",
        {
          name,
          role,
          email,
          password,
          phone,
          organisationName,
          address,
          hospitalname,
          website,
        }
      );
      console.log("API response data:", data);
      if (data?.success) {
        //-> ? mark tha
        alert("User Registerd Successfully");
        //  toast.success(data.message);
        window.location.replace("/login");
        return data;
      } else {
        console.log("API response data:", data);
        // alert("Registration failed");
        // return rejectWithValue("Registration failed without error message.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Current User
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get(
        "https://new-emxx.onrender.com/auth/current-user"
      );
      if (res.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
