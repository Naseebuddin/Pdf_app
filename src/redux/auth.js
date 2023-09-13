const { createSlice } = require("@reduxjs/toolkit");
const { setUserData, clearUserData } = require("../utils/utils");

const authSlice = createSlice({
  name: "userData",
  initialState: {
    userData: {},
    isLogin: false,
  },
  reducers: {
    saveUserData: (state, action) => {
      state.isLogin = action.payload;
      setUserData(action.payload);
    },
    removeUserData: (state, action) => {
      clearUserData();
      state.isLogin = undefined;
    },
  },
});

export const { saveUserData, removeUserData } = authSlice.actions;
export default authSlice.reducer;
