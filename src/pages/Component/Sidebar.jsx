// import * as React from "react";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import GridViewIcon from "@mui/icons-material/GridView";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

// import { useNavigate } from "react-router-dom";

// export default function Sidebar() {
//   const [activeIndex, setActiveIndex] = React.useState(0);
//   const navigate = useNavigate();

//   const sidebarItems = [
//     { text: "Dashboard", icon: <DashboardIcon />, route: "/dashboard" },
//     { text: "Projects", icon: <GridViewIcon />, route: "/project" },
//     { text: "Estimates", icon: <AttachMoneyIcon />, route: "/estimates" },
//   ];

//   const handleNavigation = (index, route) => {
//     setActiveIndex(index);
//     navigate(route);
//   };

//   return (
//     <Box
//       sx={{
//         width: 250,
//         height: "100vh",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         bgcolor: "#fff",
//         boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//         zIndex: 1,
//       }}
//     >
//       <Box
//         sx={{
//           padding: 2,
//           textAlign: "center",
//           fontWeight: "bold",
//           color: "#007bff",
//           fontSize: 20,
//         }}
//       >
//         LOGO
//       </Box>
//       <List>
//         {sidebarItems.map((item, index) => (
//           <ListItem key={item.text} disablePadding>
//             <ListItemButton
//               onClick={() => handleNavigation(index, item.route)}
//               sx={{
//                 bgcolor: activeIndex === index ? "#007bff" : "transparent",
//                 color: activeIndex === index ? "#fff" : "#000",
//                 borderRadius: 2,
//                 margin: "4px 8px",
//                 "&:hover": {
//                   bgcolor: activeIndex === index ? "#0056b3" : "#f4f4f4",
//                 },
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   color: activeIndex === index ? "#fff" : "#000",
//                   minWidth: 40,
//                 }}
//               >
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText
//                 primary={item.text}
//                 sx={{ fontWeight: activeIndex === index ? "bold" : "normal" }}
//               />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// }


import * as React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import GridViewIcon from "@mui/icons-material/GridView";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [activeIndex, setActiveIndex] = React.useState(0);

  const sidebarItems = [
    { text: "Dashboard", icon: <DashboardIcon />, route: "/dashboard" },
    { text: "Projects", icon: <GridViewIcon />, route: "/project" },
    { text: "Estimates", icon: <AttachMoneyIcon />, route: "/estimates" },
  ];

  // Update activeIndex based on current route
  React.useEffect(() => {
    const currentIndex = sidebarItems.findIndex(
      (item) => item.route === location.pathname
    );
    setActiveIndex(currentIndex !== -1 ? currentIndex : 0); // Default to the first item if not found
  }, [location.pathname]);

  const handleNavigation = (index, route) => {
    navigate(route);
  };

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        bgcolor: "#fff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          padding: 2,
          textAlign: "center",
          fontWeight: "bold",
          color: "#007bff",
          fontSize: 20,
        }}
      >
        LOGO
      </Box>
      <List>
        {sidebarItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(index, item.route)}
              sx={{
                bgcolor: activeIndex === index ? "#007bff" : "transparent",
                color: activeIndex === index ? "#fff" : "#000",
                borderRadius: 2,
                margin: "4px 8px",
                "&:hover": {
                  bgcolor: activeIndex === index ? "#0056b3" : "#f4f4f4",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: activeIndex === index ? "#fff" : "#000",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ fontWeight: activeIndex === index ? "bold" : "normal" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
