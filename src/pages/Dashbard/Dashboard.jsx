// import React from "react";
// import Sidebar from "../Component/Sidebar";
// import Navbar from "../Component/Navbar";
// import Box from "@mui/material/Box";

// const Dashboard = () => {
//   return (
//     <Box sx={{ display: "flex" }}>
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content Area */}
//       <Box
//         sx={{
//           flexGrow: 1, // Allows the content area to take remaining space
//            // To match the width of the sidebar (250px)
//           padding: 2,
//         }}
//       >
//         <Navbar />

//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

// import React, { useEffect } from 'react';
// import {
//     Box,
//     Typography,
//     Grid,
//     Card,
//     CardContent,
//     IconButton,
//     LinearProgress,
//     Select,
//     MenuItem,
//   } from '@mui/material';
// import Sidebar from '../Component/Sidebar';
// import Navbar from '../Component/Navbar';
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCarts } from '../../features/Slice/chartSlice';

// export default function Dashbard() {
//     const dispatch = useDispatch();

//     const { carts, isLoading, error } = useSelector((state) => state.chart);
//     console.log("post",carts)

//     useEffect(() => {
//         dispatch(fetchCarts());
//       }, [dispatch]);

//   return (
//     <Box sx={{ display: 'flex', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
//     {/* Sidebar */}
//     <Box sx={{ minHeight: '100vh' }}>
//       <Sidebar />
//     </Box>

//     {/* Main Content */}
//     <Box sx={{ flexGrow: 1, p: 2, ml: 3, mt: 4 }}>
//       {/* Navbar */}
//       <Navbar />
//     </Box>
//     <Box sx={{mt:4}}>

//       <Typography variant="h4" sx={{ mb: 2 }}>
//         Dashboard
//       </Typography>

//       {/* Stats Section */}
//       <Grid container spacing={2} sx={{ mb: 4 }}>
//         {carts.map((stat, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
//               <CardContent>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     mb: 1,
//                   }}
//                 >
//                   <Typography variant="h6">{stat.title}</Typography>
//                   <IconButton
//                     sx={{
//                       backgroundColor: stat.color,
//                       color: '#fff',
//                       p: 1,
//                       borderRadius: '50%',
//                     }}
//                   >
//                     {stat.icon}
//                   </IconButton>
//                 </Box>
//                 <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
//                   {stat.value}
//                 </Typography>
//                 <Typography variant="caption" color="text.secondary">
//                   {stat.trend}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   </Box>

//   );
// }

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Grid,
//   Paper,
//   Typography,
//   Box,
//   Card,
//   CardContent,
//   IconButton,
// } from "@mui/material";
// import Layout from "../../Layout ";
// import { fetchDashboardData } from "../../features/Slice/dashboardSlice";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector((state) => state.dashboard);

//   useEffect(() => {
//     dispatch(fetchDashboardData());
//   }, [dispatch]);

//   // const stats = [
//   //   {
//   //     title: "Total User",
//   //     value: data.totalUser || "N/A",
//   //     change: "8.5% Up from yesterday",
//   //     icon: "👤",
//   //     trendColor: "green",
//   //   },
//   //   {
//   //     title: "Total Order",
//   //     value: data.totalOrder || "N/A",
//   //     change: "1.3% Up from past week",
//   //     icon: "📦",
//   //     trendColor: "green",
//   //   },
//   //   {
//   //     title: "Total Sales",
//   //     value: data.totalSales || "N/A",
//   //     change: "4.3% Down from yesterday",
//   //     icon: "💰",
//   //     trendColor: "red",
//   //   },
//   //   {
//   //     title: "Total Pending",
//   //     value: data.totalPending || "N/A",
//   //     change: "1.8% Up from yesterday",
//   //     icon: "⏳",
//   //     trendColor: "green",
//   //   },
//   // ];

//   return (
//     <Layout>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//           marginLeft: "270px",
//           marginBottom: "20px",
//         }}
//       >
//         <Typography variant="h4" align="center" gutterBottom>
//           Dashboard
//         </Typography>
//       </Box>
//       <Box sx={{ width: "100%", marginLeft: "270px" }}>
//         {loading && <Typography>Loading...</Typography>}
//         {error && <Typography color="error">{error}</Typography>}
//         {!loading && !error && (
//           <>
//             {/* Stats Cards */}
//             <Grid container spacing={3} mb={3}>
//               {data.map((stat, index) => (
//                 <Grid item xs={12} sm={6} md={3} key={index}>
//                   <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
//                     <CardContent>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "space-between",
//                           mb: 1,
//                         }}
//                       >
//                         <Typography variant="h6">{stat.title}</Typography>
//                         <IconButton
//                           sx={{
//                             backgroundColor: stat.trendColor,
//                             color: "#fff",
//                             p: 1,
//                             borderRadius: "50%",
//                           }}
//                         >
//                           {stat.icon}
//                         </IconButton>
//                       </Box>
//                       <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                         {stat.value}
//                       </Typography>
//                       <Typography variant="caption" color="text.secondary">
//                         {stat.change}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </>
//         )}
//       </Box>
//     </Layout>
//   );
// };

// export default Dashboard;



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
// Uncomment this line if you're using the Line component from react-chartjs-2

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
            {/* Stats Cards */}
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

            {/* Sales Details Chart */}
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Sales Details
              </Typography>
              {/* Uncomment the below section if you are using react-chartjs-2 */}
              
              {/* <Line
                data={chartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: false },
                    tooltip: { enabled: true },
                  },
                  scales: {
                    x: { grid: { display: false } },
                    y: { grid: { color: "#f0f0f0" } },
                  },
                }}
              /> */}
             
            </Paper>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Dashboard;
