import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Typography,
  Grid,
  InputAdornment,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProject,
  fetchProjects,
  setEditingProject,
} from "../../features/Slice/projectsSlice";
import { headers } from "../../constants/columns";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import Layout from "../../Layout ";

const Project = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { projects, loading, error } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = (row) => {
    dispatch(setEditingProject(row));
    navigate(ROUTES.ADD_PROJECT);
  };

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center">
        Error: {error}
      </Typography>
    );
  }

  const handleAddProjectClick = () => {
    navigate(ROUTES.ADD_PROJECT);
  };

  const handleDelete = (row) => {
    dispatch(deleteProject(row.id));
  };

  return (
    <>
      <Layout>
        <TableContainer
          component={Paper}
          sx={{
            marginLeft: "270px",
            marginTop: "16px",
            maxHeight: "calc(100vh - 200px)",
            overflowY: "auto",
          }}
        >
          <Box>
            <Typography variant="h4" align="left" gutterBottom>
              Project Management
            </Typography>
            <Grid
              container
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "16px" }}
            >
              <Grid item>
                <TextField
                  variant="outlined"
                  placeholder="Search by Manager..."
                  value={searchTerm}
                  onChange={handleSearch}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAddProjectClick}
                  sx={{ ml: 2 }}
                >
                  Add Project
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      borderRight: "2px solid #000",
                      width: header.width,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      textAlign: header.textAlign || "center",
                    }}
                  >
                    {header.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {projects
                .filter((item) =>
                  item.manager
                    ?.toLowerCase()
                    .includes(searchTerm.toLowerCase()),
                )
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.customer || "N/A"}</TableCell>
                    <TableCell>{row.refnumber || "N/A"}</TableCell>
                    <TableCell>{row.projectname || "N/A"}</TableCell>
                    <TableCell>{row.projectnumber || "N/A"}</TableCell>
                    <TableCell>{row.arealocation || "N/A"}</TableCell>
                    <TableCell>{row.address || "N/A"}</TableCell>
                    <TableCell>{row.duedate || "N/A"}</TableCell>
                    <TableCell>{row.manager}</TableCell>
                    <TableCell>{row.staff}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ marginRight: "8px" }}
                        onClick={() => handleEdit(row)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => handleDelete(row)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px",
                        }}
                      >
                        {row.comments?.map((comment, idx) => (
                          <Avatar
                            key={idx}
                            alt="Avatar"
                            src={comment.avatar}
                            sx={{
                              width: 32,
                              height: 32,
                            }}
                          />
                        ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Layout>
    </>
  );
};

export default Project;
