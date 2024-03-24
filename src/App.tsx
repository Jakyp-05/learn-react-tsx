import React from "react";
import Home from "./components/home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/login";
import PrivateRouter from "./utils/router/PrivateRouter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
