import { setUserData } from "../../utils/utils";
import { store } from "../store";
const { dispatch } = store;
export const login = (data) => {
  dispatch(setUserData(data));
};
