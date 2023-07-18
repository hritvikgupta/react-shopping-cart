import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import { ShoppingCardProvider } from "./contexts/ShoppingCartContext";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <ShoppingCardProvider>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login/:tab" element={<LoginPage />}></Route>
        </Routes>
      </Container>
    </ShoppingCardProvider>
  );
}

export default App;
