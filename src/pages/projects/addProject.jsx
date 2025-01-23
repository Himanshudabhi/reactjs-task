import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import {
  addProject,
  updateProject,
  clearEditingProject,
} from "../../features/Slice/projectsSlice";
import { validateField } from "../../helpers/validators";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import Layout from "../../Layout ";

const AddProject = () => {
  const [formData, setFormData] = useState({
    customer: "",
    refnumber: "",
    projectname: "",
    projectnumber: "",
    arealocation: "",
    duedate: "",
    staff: "",
    address: "",
    contact: "",
    status: "",
    manager: "",
    email: "",
  });

  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();
  const { loading, editingProject } = useSelector((state) => state.projects);
  const navigate = useNavigate();

  useEffect(() => {
    if (editingProject) {
      setFormData(editingProject);
    } else {
      resetForm();
    }
  }, [editingProject]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const fieldError = validateField(name, value);
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    return newErrors;
  };

  const handleSubmit = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    setError({});
    try {
      if (editingProject) {
        await dispatch(updateProject(formData));
        setSuccessMessage("Project updated successfully!");
      } else {
        await dispatch(addProject(formData));
        setSuccessMessage("Project added successfully!");
      }

      setTimeout(() => {
        navigate(ROUTES.PROJECT);
      }, 2000);
    } catch (error) {
      setError({ general: "Error saving project. Please try again." });
    }
  };

  const handleCancel = () => {
    dispatch(clearEditingProject());
    resetForm();
    navigate(ROUTES.PROJECT);
  };

  const resetForm = () => {
    setFormData({
      customer: "",
      refnumber: "",
      projectname: "",
      projectnumber: "",
      arealocation: "",
      duedate: "",
      staff: "",
      address: "",
      contact: "",
      status: "",
      manager: "",
      email: "",
    });
    setError({});
    setSuccessMessage("");
  };

  return (
    <>
      <Layout>
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            sx={{ marginBottom: 2, marginLeft: "270px", marginTop: "10px" }}
          >
            {editingProject ? "Edit Project" : "Add New Project"}
          </Typography>
          <Box
            sx={{
              width: "160vh",
              height: "65vh",
              marginLeft: "270px",
              borderRadius: 1,
              bgcolor: "#f1f3f4",
              padding: 4,
            }}
          >
            <Grid container spacing={2}>
              {Object.keys(formData)
                .filter((key) => key !== "id" && key !== "comments") // Exclude "id" and "comments"
                .map((key, index) => (
                  <Grid item xs={4} key={index}>
                    <InputLabel
                      htmlFor={key}
                      sx={{
                        marginBottom: 1,
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: "#333",
                      }}
                    >
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </InputLabel>

                    <TextField
                      fullWidth
                      id={key}
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      type={key === "duedate" ? "date" : "text"}
                      error={!!error[key]}
                      helperText={error[key]}
                      placeholder={`Enter ${key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}`}
                    />
                  </Grid>
                ))}
            </Grid>

            {error.general && (
              <Typography variant="body2" color="error" sx={{ marginTop: 2 }}>
                {error.general}
              </Typography>
            )}
            {successMessage && (
              <Typography variant="body2" color="primary" sx={{ marginTop: 2 }}>
                {successMessage}
              </Typography>
            )}
            <Box sx={{ marginTop: 4, display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{ borderRadius: "8px", padding: "10px 50px" }}
                disabled={loading}
              >
                {loading
                  ? "Saving..."
                  : editingProject
                    ? "Update Project"
                    : "Add Now"}
              </Button>
              <Button
                variant="outlined"
                sx={{ borderRadius: "8px", padding: "10px 50px" }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default AddProject;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import InputLabel from '@mui/material/InputLabel';
// import Sidebar from '../Component/Sidebar';
// import Navbar from '../Component/Navbar';
// import { addProject, updateProject, clearEditingProject } from '../../features/Slice/projectsSlice';
// import { validateField } from '../../helpers/validators';
// import { useNavigate } from 'react-router-dom'; // Use navigate for redirection
// import { ROUTES } from '../../constants/routes';
// import Layout from '../../Layout ';

// export default function AddProject() {
//   const [formData, setFormData] = useState({
//     customer: '',
//     refnumber: '',
//     projectname: '',
//     projectnumber: '',
//     arealocation: '',
//     duedate: '',
//     staff: '',
//     address: '',
//     contact: '',
//     status: '',
//     manager: '',
//     email: '',
//   });

//   const [error, setError] = useState({});
//   const [successMessage, setSuccessMessage] = useState('');
//   const dispatch = useDispatch();
//   const { loading, editingProject } = useSelector((state) => state.projects);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (editingProject) {
//       setFormData(editingProject);
//     } else {
//       resetForm();
//     }
//   }, [editingProject]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     const fieldError = validateField(name, value);
//     setError((prevErrors) => ({
//       ...prevErrors,
//       [name]: fieldError,
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     Object.keys(formData).forEach((field) => {
//       const error = validateField(field, formData[field]);
//       if (error) {
//         newErrors[field] = error;
//       }
//     });
//     return newErrors;
//   };

//   const handleSubmit = async () => {
//     const errors = validateForm();
//     if (Object.keys(errors).length > 0) {
//       setError(errors);
//       return;
//     }

//     setError({});
//     try {
//       if (editingProject) {
//         await dispatch(updateProject(formData));
//         setSuccessMessage('Project updated successfully!');
//       } else {
//         await dispatch(addProject(formData));
//         setSuccessMessage('Project added successfully!');
//       }

//       setTimeout(() => {
//         navigate(ROUTES.PROJECT);
//       }, 2000);
//     } catch (error) {
//       setError({ general: 'Error saving project. Please try again.' });
//     }
//   };

//   const handleCancel = () => {
//     dispatch(clearEditingProject());
//     resetForm();
//     navigate(ROUTES.PROJECT);
//   };

//   const resetForm = () => {
//     setFormData({
//       customer: '',
//       refnumber: '',
//       projectname: '',
//       projectnumber: '',
//       arealocation: '',
//       duedate: '',
//       staff: '',
//       address: '',
//       contact: '',
//       status: '',
//       manager: '',
//       email: '',
//     });
//     setError({});
//     setSuccessMessage('');
//   };

//   return (
//     <>
//     <Layout>
//       <Box sx={{ width: '100%' }}>
//         <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: '270px', marginTop: '10px' }}>
//           {editingProject ? 'Edit Project' : 'Add New Project'}
//         </Typography>
//         <Box
//           sx={{
//             width: '160vh',
//             height: '65vh',
//             marginLeft: '270px',
//             borderRadius: 1,
//             bgcolor: '#f1f3f4',
//             padding: 4,
//           }}
//         >
//          <Grid container spacing={2}>
//           {Object.keys(formData).map((key, index) => (
//             <Grid item xs={4} key={index}>
//               <InputLabel
//                 htmlFor={key}
//                 sx={{ marginBottom: 1, fontWeight: 'bold', fontSize: '14px', color: '#333' }}
//               >
//                 {key
//                   .replace(/([A-Z])/g, ' $1')
//                   .replace(/^./, (str) => str.toUpperCase())}
//               </InputLabel>

//               <TextField
//                 fullWidth
//                 id={key}
//                 name={key}
//                 value={formData[key]}
//                 onChange={handleChange}
//                 type={key === 'duedate' ? 'date' : 'text'}
//                 error={!!error[key]}
//                 helperText={error[key]}
//                 placeholder={`Enter ${key
//                   .replace(/([A-Z])/g, ' $1')
//                   .replace(/^./, (str) => str.toUpperCase())}`}
//               />
//             </Grid>
//           ))}
//       </Grid>
//           {error.general && (
//             <Typography variant="body2" color="error" sx={{ marginTop: 2 }}>
//               {error.general}
//             </Typography>
//           )}
//           {successMessage && (
//             <Typography variant="body2" color="primary" sx={{ marginTop: 2 }}>
//               {successMessage}
//             </Typography>
//           )}
//           <Box sx={{ marginTop: 4, display: 'flex', gap: 2 }}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSubmit}
//               sx={{ borderRadius: '8px', padding: '10px 50px' }}
//               disabled={loading}
//             >
//               {loading ? 'Saving...' : editingProject ? 'Update Project' : 'Add Now'}
//             </Button>
//             <Button
//               variant="outlined"
//               sx={{ borderRadius: '8px', padding: '10px 50px' }}
//               onClick={handleCancel}
//             >
//               Cancel
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//       </Layout>
//     </>
//   );
// }
