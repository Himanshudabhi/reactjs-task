// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   TextField,
//   Button,
//   Box,
//   Typography,
//   Alert,
//   Link,
//   Container,
// } from "@mui/material";
// import {
//   SUCCESS_REGISTER_MESSAGE,
//   VALIDATION_MESSAGES,
// } from "../../constants/messages";
// import { registerUser, clearError } from "../../features/Slice/registerSlice";
// import { isValidEmail, isValidPassword } from "../../helpers/validators";
// import { useNavigate } from "react-router-dom";
// import { Link as RouterLink } from "react-router-dom";
// import { ROUTES } from "../../constants/routes";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, error, user } = useSelector((state) => state.auth);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name) errors.name = VALIDATION_MESSAGES.name;
//     if (!isValidEmail(formData.email)) errors.email = VALIDATION_MESSAGES.email;
//     if (!isValidPassword(formData.password))
//       errors.password = VALIDATION_MESSAGES.password;
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       dispatch(registerUser(formData))
//         .unwrap()
//         .then(() => {
//           setFormData({ name: "", email: "", password: "" });
//           navigate(ROUTES.LOGIN);
//         })
//         .catch(() => {});
//     }
//   };

//   const handleClearError = () => {
//     dispatch(clearError());
//   };

//   return (
//     <Container component="main" maxWidth="xs" sx={{ marginLeft: "550px" }}>
//       <Box
//         sx={{
//           maxWidth: 400,
//           mx: "auto",
//           mt: 5,
//           p: 3,
//           border: "1px solid #ddd",
//           borderRadius: 2,
//         }}
//       >
//         <Typography variant="h5" gutterBottom>
//           Register
//         </Typography>
//         {error && (
//           <Alert severity="error" onClose={handleClearError} sx={{ mb: 2 }}>
//             {error}
//           </Alert>
//         )}
//         {user && (
//           <Alert severity="success" sx={{ mb: 2 }}>
//             {SUCCESS_REGISTER_MESSAGE}
//           </Alert>
//         )}
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             error={!!formErrors.name}
//             helperText={formErrors.name}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             error={!!formErrors.email}
//             helperText={formErrors.email}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Password"
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             error={!!formErrors.password}
//             helperText={formErrors.password}
//             fullWidth
//             margin="normal"
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             disabled={isLoading}
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             {isLoading ? "Registering..." : "Register"}
//           </Button>
//         </form>
//         <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//           Already have an account?{" "}
//           <Link
//             component={RouterLink}
//             to={ROUTES.LOGIN}
//             variant="body2"
//             color="primary"
//           >
//             Login
//           </Link>
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export default Register;

// import React from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   Checkbox,
//   Button,
//   FormControlLabel,
//   Link,
//   Container
// } from "@mui/material";

// const Register = ()=>  {
//   return (

//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         width:"100%",
//         marginLeft:"300px"
//       }}
//     >
//       <Box
//         sx={{
//           width: "100%",
//           maxWidth: 500, // Increased size
//           bgcolor: "white",
//           boxShadow: 3,
//           borderRadius: 2,
//           p: 5, // Adjusted padding for better spacing
//         }}
//       >
//         <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2}>
//           Create an Account
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           color="text.secondary"
//           textAlign="center"
//           mb={4}
//         >
//           Create an account to continue
//         </Typography>

//         <TextField
//           fullWidth
//           label="Email address"
//           type="email"
//           variant="outlined"
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="Username"
//           type="text"
//           variant="outlined"
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="Password"
//           type="password"
//           variant="outlined"
//           margin="normal"
//         />
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <FormControlLabel
//             control={<Checkbox />}
//             label="I accept terms and conditions"
//           />
//           <Link href="#" underline="hover" color="primary">
//             Forgot Password?
//           </Link>
//         </Box>
//         <Button
//           fullWidth
//           variant="contained"
//           color="primary"
//           size="large"
//           sx={{
//             mt: 3, // Increased top margin for spacing
//             mb: 3,
//             textTransform: "none",
//             fontWeight: "bold",
//           }}
//         >
//           Sign Up
//         </Button>
//         <Typography textAlign="center" variant="body2">
//           Already have an account?{" "}
//           <Link href="#" underline="hover" color="primary">
//             Login
//           </Link>
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default Register;

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
