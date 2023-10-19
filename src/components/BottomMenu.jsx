import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LogoutIcon from "@mui/icons-material/Logout";
import BarChartIcon from "@mui/icons-material/BarChart";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useNavigate, useLocation } from "react-router-dom";

export default function LabelBottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState("home");

  React.useEffect(() => {
    switch (location.pathname) {
      case "/main":
        setValue("home");
        break;
      case "/meals":
        setValue("meals");
        break;
      case "/statistics":
        setValue("stats");
        break;
      case "/myProfile":
        setValue("profile");
        break;
      default:
        setValue("home");
        break;
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case "home":
        navigate("/main");
        break;
      case "stats":
        navigate("/statistics");
        break;
      case "profile":
        navigate("/myProfile");
        break;
      case "meals":
        navigate("/meals");
        break;
      case "logout":
        localStorage.removeItem("token");
        window.location.replace("/");
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
        sx={{
          minWidth: 0,
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
        }}
      />
      <BottomNavigationAction
        label="My Meals"
        value="meals"
        icon={<RestaurantIcon />}
        sx={{
          minWidth: 0,
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
        }}
      />
      <BottomNavigationAction
        label="Stats"
        value="stats"
        icon={<BarChartIcon />}
        sx={{
          minWidth: 0,
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
        }}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<AccountBoxIcon />}
        sx={{
          minWidth: 0,
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
        }}
      />
      <BottomNavigationAction
        label="Logout"
        value="logout"
        icon={<LogoutIcon />}
        sx={{
          minWidth: 0,
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
        }}
      />
    </BottomNavigation>
  );
}
