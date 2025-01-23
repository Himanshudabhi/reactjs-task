import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
  Container,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ROUTES } from "../../constants/routes";
import { login } from "../../features/Slice/authSlice";
import { isValidEmail, isValidPassword } from "../../helpers/validators";
import { VALIDATION_MESSAGES } from "../../constants/messages";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!isValidEmail(formData.email)) errors.email = VALIDATION_MESSAGES.email;
    if (!isValidPassword(formData.password))
      errors.password = VALIDATION_MESSAGES.password;
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await dispatch(login(formData)).unwrap();
      window.location.href = ROUTES.DASHBOARD;
    } catch (error) {
      setFormErrors({ api: error.message || "Login failed" });
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginLeft: "550px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h5" fontWeight="bold" align="center" mb={2}>
          Login to Account
        </Typography>
        <Typography variant="body2" align="center" mb={4} color="textSecondary">
          Please enter your email and password to continue
        </Typography>
        {formErrors.api && (
          <Typography variant="body2" color="error" align="center" mb={2}>
            {formErrors.api}
          </Typography>
        )}
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={!!formErrors.password}
            helperText={formErrors.password}
            fullWidth
            margin="normal"
          />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Remember Password"
            />
            <Link
              component={RouterLink}
              to={ROUTES.DASHBOARD}
              variant="body2"
              color="primary"
            >
              Forgot Password?
            </Link>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 1 }}
          >
            Sign In
          </Button>
          <Typography variant="body2" align="center">
            Don't have an account?{" "}
            <Link
              component={RouterLink}
              to={ROUTES.REGISTER}
              variant="body2"
              color="primary"
            >
              Create Account
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
