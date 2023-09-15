import { getUserData } from "../../utils/utils";
import { removeUserData, saveUserData } from "../reducers/auth";

const { useDispatch } = require("react-redux");

const dispatch = useDispatch();

export const home = (data) => {
  dispatch(saveUserData(data));
};
export const logout = () => {
  dispatch(removeUserData(""));
};
export const UserData = async () => {
    // let res = await apiGet(USER_DATA);
    console.log(res?.data);
    let userData = await getUserData();
    console.log(userData, "user data in auth section>>>>>");
    home({ ...userData, ...res?.data });
    console.log(res, "this is response in auth action saveuserdata>>>>");
  };
export default {
  home,
  logout,
};