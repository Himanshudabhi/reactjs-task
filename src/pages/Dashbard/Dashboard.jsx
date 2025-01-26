import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { fetchDashboardData } from "../../features/Slice/dashboardSlice";
import Layout from "../../Layout ";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

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
          Dashboard
        </Typography>
      </Box>
      <Box sx={{ width: "100%", marginLeft: "270px" }}>
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        {!loading && !error && (
          <>
            <Grid container spacing={3} mb={3}>
              {data.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="h6">{stat.title}</Typography>
                        <IconButton
                          sx={{
                            backgroundColor: stat.trendColor,
                            color: "#fff",
                            p: 1,
                            borderRadius: "50%",
                          }}
                        >
                          {stat.icon}
                        </IconButton>
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {stat.change}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Sales Details
              </Typography>
            </Paper>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Dashboard;
