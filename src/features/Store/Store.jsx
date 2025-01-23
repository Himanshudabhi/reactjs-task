import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/authSlice";
import registerReducer from "../Slice/registerSlice";
import projectsReducer from "../Slice/projectsSlice";
import estimatesReducer from "../Slice/estimatesSlice";
import dashboardReducer from "../Slice/dashboardSlice"
const Store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    dashboard: dashboardReducer,
    projects: projectsReducer,
    estimates: estimatesReducer,
  },
});
export default Store;
