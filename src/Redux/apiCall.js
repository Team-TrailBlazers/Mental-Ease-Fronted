import { loginStart, loginSuccess, loginFailure, logOut } from "./userSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastStyles } from "../../toastConfig";
import Axios from "axios";
import { apidomain } from "../Utils/apiDomain";

export const loginUser = async (dispatch, user, callback) => {
  // console.log(user);
  dispatch(loginStart());
  try {
    const { data } = await Axios.post(`${apidomain}/api/auth/login`, user);
    if (data.token) {
      dispatch(loginSuccess(data));
      toast.success("Login Successful", toastStyles.success);
      callback();
    }
  } catch (response) {
    dispatch(loginFailure());
    // console.log(response.response.data.message);
    toast.error(response.response.data.message, toastStyles.error);
    // alert(response.response.data.message)
  }
};

export const logOutUser = async (dispatch) => {
  console / logOut(dispatch);
  dispatch(logOut());
};
