import { useRouter } from "next/router";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  List,
  ListItem,
  ListItemText,
  ListItemIcon, 
  Avatar,
  Collapse
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import ImageIcon from "@mui/icons-material/Image";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import PeopleIcon from "@mui/icons-material/People";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const menuItems = [
  { 
    id: "dashboard", 
    icon: <DashboardIcon />, 
    text: "Dashboard" 
  },
  { 
    id: "chats", 
    icon: <ChatIcon />, 
    text: "Chats" 
  },
  { 
    id: "media", 
    icon: <ImageIcon />, 
    text: "Media" 
  },
  { 
    id: "cab", 
    icon: <DirectionsCarIcon />, 
    text: "Cab",
    subItems: [
      { id: "cab-bookings", text: "Bookings" },
      { id: "cab-drivers", text: "Drivers" },
      { id: "cab-vehicles", text: "Vehicles" },
      { id: "cab-routes", text: "Routes" }
    ]
  },
  { 
    id: "freight", 
    icon: <LocalShippingIcon />, 
    text: "Freight",
    subItems: [
      { id: "freight-orders", text: "Orders" },
      { id: "freight-trucks", text: "Trucks" },
      { id: "freight-routes", text: "Routes" },
      { id: "freight-pricing", text: "Pricing" }
    ]
  },
  { 
    id: "parcel", 
    icon: <InventoryIcon />, 
    text: "Parcel",
    subItems: [
      { id: "parcel-orders", text: "Orders" },
      { id: "parcel-delivery", text: "Delivery Partners" },
      { id: "parcel-pricing", text: "Pricing" },
      { id: "parcel-tracking", text: "Tracking" }
    ]
  },
  { 
    id: "rides", 
    icon: <DirectionsBikeIcon />, 
    text: "Rides",
    subItems: [
      { id: "ride-requests", text: "Requests" },
      { id: "ride-history", text: "History" },
      { id: "ride-drivers", text: "Drivers" },
      { id: "ride-pricing", text: "Pricing" }
    ]
  },
  { 
    id: "users", 
    icon: <PeopleIcon />, 
    text: "Users",
    subItems: [
      { id: "user-list", text: "All Users" },
      { id: "user-drivers", text: "Drivers" },
      { id: "user-customers", text: "Customers" },
      { id: "user-admins", text: "Admins" }
    ]
  },
  { 
    id: "riders", 
    icon: <TwoWheelerIcon />, 
    text: "Riders",
    subItems: [
      { id: "rider-list", text: "All Riders" },
      { id: "rider-requests", text: "Requests" },
      { id: "rider-ratings", text: "Ratings" },
      { id: "rider-payments", text: "Payments" }
    ]
  },
];

const CrmLayout = ({ children }) => {
  const { logout } = useAuth();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const router = useRouter();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    logout();
  };

  const handleItemClick = (id) => {
    router.push(`/${id}`);
  };

  const handleSubmenuClick = (parentId) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [parentId]: !prev[parentId]
    }));
  };

  const isSelected = (id) => router.pathname === `/${id}`;
  const isParentSelected = (item) => {
    return item.subItems?.some(subItem => isSelected(subItem.id)) || isSelected(item.id);
  };

  return (
    <Box sx={{ 
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      display: "flex"
    }}>
      {/* Sidebar */}
      <Box
        sx={{
          backgroundColor: "#fd367b",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}
      >
        {/* Logo */}
        <Box sx={{ 
          px: 3.5,
          pt: 3,
          pb: 2,
          flexShrink: 0
        }}>
          <Stack
            direction="column"
            spacing={1}
            justifyContent="center"
            alignItems={"center"}
          >
            <img src="/logoImage.png" alt="Logo" width={100} />
            <br />
            <Typography
              fontSize={14}
              className="light"
              textAlign={"center"}
              sx={{ color: "#fff" }}
            >
              Deligo Content Management System
            </Typography>
          </Stack>
        </Box>

        {/* Scrollable Menu Items */}
        <Box sx={{ 
          flex: 1,
          overflowY: "auto",
          px: 2,
          pb: 2
        }}>
          <List sx={{ py: 0 }}>
            {menuItems.map((item, index) => (
              <Box key={index}>
                <ListItem
                  sx={{
                    cursor: "pointer",
                    width: "100%",
                    height: "48px",
                    color: isParentSelected(item) ? "#fff" : "#fff",
                    borderRadius: "12px",
                    mb: 1,
                    backgroundColor: isParentSelected(item)
                      ? "#ffffff60"
                      : "transparent",
                    "&:hover": {
                      backgroundColor: isParentSelected(item)
                        ? "#ffffff60"
                        : "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                  onClick={() => {
                    if (item.subItems) {
                      handleSubmenuClick(item.id);
                    } else {
                      handleItemClick(item.id);
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isParentSelected(item) ? "#fff" : "#fff",
                      minWidth: "40px",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        className={isParentSelected(item) ? "light" : "Medium"}
                        style={{ fontSize: 14 }}
                      >
                        {item.text}
                      </Typography>
                    }
                  />
                  {item.subItems && (
                    openSubmenus[item.id] ? <ExpandLess /> : <ExpandMore />
                  )}
                </ListItem>

                {item.subItems && (
                  <Collapse in={openSubmenus[item.id]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subItems.map((subItem) => (
                        <ListItem
                          key={subItem.id}
                          sx={{
                            pl: 4,
                            cursor: "pointer",
                            color: isSelected(subItem.id) ? "#fff" : "#fff",
                            backgroundColor: isSelected(subItem.id) 
                              ? "#ffffff40" 
                              : "transparent",
                            "&:hover": {
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                            },
                            borderRadius: "8px",
                            mb: 0.5,
                            height: "40px"
                          }}
                          onClick={() => handleItemClick(subItem.id)}
                        >
                          <ListItemText
                            primary={
                              <Typography style={{ fontSize: 13 }}>
                                {subItem.text}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            ))}
          </List>
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ 
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}>
        {/* Top Bar */}
        <Box sx={{ 
          backgroundColor: "#fff",
          py: 2,
          px: 3,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          zIndex: 1
        }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <TextField
              size="small"
              placeholder="Search..."
              sx={{ width: "342px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Stack spacing={4} direction="row" alignItems="center">
              <IconButton>
                {/* Notification icon */}
              </IconButton>
              <IconButton>
                {/* Message icon */}
              </IconButton>
              <Stack spacing={3} direction="row" alignItems="center">
                <Stack direction="column" alignItems="flex-start" pt={1}>
                  <Typography fontWeight="500" fontSize={16} color="#073064">
                    John Doe
                  </Typography>
                  <Typography fontSize={12} color="#5A5A5A">
                    Admin
                  </Typography>
                </Stack>
                {auth && (
                  <Box>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <Avatar variant="circular" alt="Expand" width={20} src="" />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      transformOrigin={{ vertical: "top", horizontal: "right" }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                    </Menu>
                  </Box>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* Page Content - Scrollable Area */}
        <Box sx={{ 
          flex: 1,
          overflowY: "auto",
          p: 3
        }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default CrmLayout;