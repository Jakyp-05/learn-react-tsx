import { useLocation } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import "./style.scss";
import { Box } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const AuthRootComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    const user = await axios.post(
      "'https://api.escuelajs.co/api/v1/auth/login",
      userData
    );
    console.log(user.data);
  };

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
        >
          {location.pathname === "/login" ? (
            <Login setEmail={setEmail} setPassword={setPassword} />
          ) : location.pathname === "/register" ? (
            <Register />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
