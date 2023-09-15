const { createSlice } = require("@reduxjs/toolkit");
const { setUserData, clearUserData } = require("../../utils/utils");

const initialState={
    isLogin:false
}
const auth = createSlice({
  name: "userData",
  initialState: {
    userData: {},
    isLogin: false,
  },
  reducers: {
    saveUserData: (state, action) => {
      state.isLogin = action.payload;
      setUserData(action.payload)
    },
    removeUserData: (action, payload) => {
      clearUserData();
      state.isLogin = undefined;
    },
  },
});
export const { saveUserData, removeUserData } = auth.actions;
export default auth.reducer;
