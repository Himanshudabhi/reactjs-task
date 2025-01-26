import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  Typography,
  Button,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from "@mui/icons-material";

import { fetchEstimates } from "../../features/Slice/estimatesSlice";
import Layout from "../../Layout ";

const EstimatesTable = () => {
  const dispatch = useDispatch();
  const { estimates, loading, error } = useSelector((state) => state.estimates);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    dispatch(fetchEstimates());
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginLeft: "270px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
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
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        {!loading && !error && (
          <>
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
                {estimates
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.version}>
                      <TableCell>{row.version}</TableCell>
                      <TableCell>{row.project}</TableCell>
                      <TableCell>{row.client}</TableCell>
                      <TableCell>{row.createddate}</TableCell>
                      <TableCell>{row.lastmodified}</TableCell>
                      <TableCell
                        style={{
                          backgroundColor:
                            row.status === "Created"
                              ? "green"
                              : row.status === "Processing"
                                ? "orange"
                                : "red",
                          borderRadius: "8px",
                          height: "15px",
                          width: "60px",
                          color: "white",
                          textAlign: "center",
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
              count={estimates.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </TableContainer>
    </Layout>
  );
};

export default EstimatesTable;
