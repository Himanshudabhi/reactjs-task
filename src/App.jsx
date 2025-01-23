import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import { ROUTES } from "./constants/routes";
import Dashboard from "./pages/Dashbard/Dashboard";
import Project from "./pages/projects/project";
import AddProject from "./pages/projects/addProject";
import Estimates from "./pages/Estimates/Estimates";
import "./i18n/i18n"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.PROJECT} element={<Project />} />
          <Route path={ROUTES.ADD_PROJECT} element={<AddProject />} />
          <Route path={ROUTES.ESTIMATES} element={<Estimates />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
