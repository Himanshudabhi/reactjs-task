import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Link,
  Container,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser, clearError } from "../../features/Slice/registerSlice";
import { isValidEmail, isValidPassword } from "../../helpers/validators";
import { ROUTES } from "../../constants/routes";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, user } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!isValidEmail(formData.email)) errors.email = "Invalid email address.";
    if (!isValidPassword(formData.password))
      errors.password =
        "Password must be at least 8 characters long and contain a number.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(registerUser(formData))
        .unwrap()
        .then(() => {
          setFormData({ name: "", email: "", password: "" });
          navigate(ROUTES.LOGIN);
        })
        .catch(() => {});
    }
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        marginLeft: "500px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          bgcolor: "white",
          boxShadow: 3,
          borderRadius: 2,
          p: 5,
        }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2}>
          Create an Account
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          textAlign="center"
          mb={4}
        >
          Create an account to continue
        </Typography>
        {error && (
          <Alert severity="error" onClose={handleClearError} sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {user && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Account created successfully!
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={!!formErrors.password}
            helperText={formErrors.password}
            margin="normal"
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="I accept terms and conditions"
            />
            <Link href="#" underline="hover" color="primary">
              Forgot Password?
            </Link>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            disabled={isLoading}
            sx={{
              mt: 3,
              mb: 3,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            {isLoading ? "Registering..." : "Sign Up"}
          </Button>
        </form>
        <Typography textAlign="center" variant="body2">
          Already have an account?{" "}
          <Link href={ROUTES.LOGIN} underline="hover" color="primary">
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
