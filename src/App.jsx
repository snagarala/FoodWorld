import React from "react";
import Navbar from "./components/Restaurant/Navbar";
import Footer from "./components/Restaurant/Footer";
import HomePage from "./components/Restaurant/HomePage";
import AboutPage from "./components/Restaurant/AboutPage";
import Catering from "./components/Restaurant/Catering";
import { Outlet } from 'react-router-dom';

export default function App () {
  return (
    <div className="App bg-white h-screen w-full ">
        <Navbar />
        <div className="z-50 my-9">
        <Outlet />
        {/* <HomePage /> */}
        {/* <AboutPage/> */}
        {/* <Catering/> */}
        </div>
        <Footer />
    </div>
  );
};


