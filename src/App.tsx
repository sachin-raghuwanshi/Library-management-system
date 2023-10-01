import React from "react";
import "./App.css";
import { Navbar } from "./Layout/NavbarAndFooter/Navbar";
import { Footer } from "./Layout/NavbarAndFooter/Footer";
import { HomePage } from "./Layout/HomePage/HomePage";

function App() {
  return (
    <>
      <Navbar />
        <HomePage/>
      <Footer/>
    </>
  );
}

export default App;
