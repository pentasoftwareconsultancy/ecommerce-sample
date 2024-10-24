import React from "react";
import { Routes, Route } from "react-router-dom";
import Watch from "./page/Watch";
import HomePage from "./page/HomePage";
import WestsidePage from "./page/WestsidePage";
import "./App.css";
import Women from "./components/Women/Women";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
  {/* <Navbar/> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/westside" element={<WestsidePage />} />
        <Route path="/women" element={< Women/>} />
      </Routes>
<Footer/>
    </>
  );
}

export default App;
