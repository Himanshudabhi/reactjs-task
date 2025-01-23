// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ESTIMATES_FIELD, headers } from "../../constants/columns";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Typography,
//   Grid,
//   Box,
// } from "@mui/material";
// import { fetchEstimates } from "../../features/Slice/estimatesSlice";
// import Layout from "../../Layout ";

// const Estimates = () => {
//   const dispatch = useDispatch();
//   const { estimates, loading, error } = useSelector((state) => state.estimates);

//   useEffect(() => {
//     dispatch(fetchEstimates());
//   }, [dispatch]);

//   return (
//     <Layout>
//       <TableContainer
//         component={Paper}
//         sx={{
//           marginLeft: "270px",
//           marginTop: "16px",
//           maxHeight: "calc(100vh - 200px)",
//           overflowY: "auto",
//         }}
//       >
//         <Box>
//           <Typography variant="h4" align="left" gutterBottom>
//             Project Management
//           </Typography>
//           <Grid
//             container
//             spacing={2}
//             justifyContent="space-between"
//             alignItems="center"
//             style={{ marginBottom: "16px" }}
//           >
//             <Grid item>
//               <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
//                 Add Project
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>
//         <Table>
//           <TableHead>
//             <TableRow>
//               {ESTIMATES_FIELD.map((header, index) => (
//                 <TableCell
//                   key={index}
//                   sx={{
//                     borderRight: "2px solid #000",
//                     width: header.width,
//                     whiteSpace: "nowrap",
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                     textAlign: header.textAlign || "center",
//                   }}
//                 >
//                   {header.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {loading && (
//               <TableRow>
//                 <TableCell colSpan={headers.length} align="center">
//                   Loading...
//                 </TableCell>
//               </TableRow>
//             )}
//             {error && (
//               <TableRow>
//                 <TableCell colSpan={headers.length} align="center">
//                   {error}
//                 </TableCell>
//               </TableRow>
//             )}
//             {estimates.map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell>{row.version || "N/A"}</TableCell>
//                 <TableCell>{row.project || "N/A"}</TableCell>
//                 <TableCell>{row.client || "N/A"}</TableCell>
//                 <TableCell>{row.createddate || "N/A"}</TableCell>
//                 <TableCell>{row.lastmodified || "N/A"}</TableCell>
//                 <TableCell>{row.status || "N/A"}</TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     size="small"
//                     sx={{ marginRight: "8px" }}
//                   >
//                     Edit
//                   </Button>
//                   <Button variant="contained" color="error" size="small">
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Layout>
//   );
// };

// export default Estimates;

import * as React from "react";
import { Table, Typography, Button,Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import TablePagination from "@mui/material/TablePagination";
import Layout from "../../Layout ";

const estimatesData = [
  {
    version: "00001",
    project: "Christine Brooks",
    client: "089 Kutch Green Apt. 448 ",
    createdDate: "2023-01-15",
    lastModified: "2023-01-20",
    status: "Created",
  },
  {
    version: "00002",
    project: "John Doe",
    client: "123 Elm St.",
    createdDate: "2023-02-10",
    lastModified: "2023-02-15",
    status: "Processing",
  },
  // Add more data as needed
];

const EstimatesTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Layout>
        <Box sx={{display:"flex",justifyContent:"space-between",width:"100%", marginLeft:"270px" ,marginBottom:"20px"}}>
      <Typography variant="h4" align="center" gutterBottom >
      Estimates
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ ml: 2 }}
        align="center"
      >
        Add Estimates
      </Button>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          marginLeft: "270px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>VERSION</TableCell>
              <TableCell>PROJECT</TableCell>
              <TableCell>CLIENT</TableCell>
              <TableCell>CREATED DATE</TableCell>
              <TableCell>LAST MODIFIED</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {estimatesData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.version}>
                  <TableCell>{row.version}</TableCell>
                  <TableCell>{row.project}</TableCell>
                  <TableCell>{row.client}</TableCell>
                  <TableCell>{row.createdDate}</TableCell>
                  <TableCell>{row.lastModified}</TableCell>
                  <TableCell
                style={{
                  backgroundColor:
                    row.status === "Created"
                      ? "green"
                      : row.status === "Processing"
                        ? "orange"
                        : "red",
                  borderRadius: '8px',
                  height: '15px',
                  width: '60px',
                  color: 'white',
                  textAlign: 'center',
                //   lineHeight: '24px',
                }}
              >
                {row.status}
              </TableCell>
                  <TableCell>
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={estimatesData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <IconButton aria-label="add">
          <AddIcon />
        </IconButton>
      </TableContainer>
    </Layout>
  );
};

export default EstimatesTable;
