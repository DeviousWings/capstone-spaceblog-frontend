import { Route, Routes } from "react-router-dom";
import React from "react";

import "../style/App.scss";
import Index from "./pages/index";
import Layout from "../Layout";
import Login from "./auth/login";
import Register from "./auth/register";
import { UserContextProvider } from "./navigation/UserContext";
import CreatePost from "./pages/Create";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
