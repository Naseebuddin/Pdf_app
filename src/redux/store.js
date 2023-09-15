
import auth from "./reducers/auth";
import counterSlice from "./reducers/counterSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store =  configureStore({
reducer:{
  counter:counterSlice,
  stateData:auth,
  
},
})