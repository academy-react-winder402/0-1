import { configureStore } from "@reduxjs/toolkit";
import register from "./Auth/register";

const store = configureStore({
  reducer: {
    register,

  },
});

export default store;