import { useLocation } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import "./style.scss";
import { Box } from "@mui/material";

const AuthRootComponent = () => {
  const location = useLocation();
  return (
    <div className="root">
      <div className="form">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
        >
          {location.pathname === "/login" ? (
            <Login />
          ) : location.pathname === "/register" ? (
            <Register />
          ) : null}
        </Box>
      </div>
    </div>
  );
};

export default AuthRootComponent;
