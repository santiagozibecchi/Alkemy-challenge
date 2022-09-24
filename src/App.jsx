import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ListApp from "./components/ListApp";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Styles
import "./css/App.css";

const App = () => {
   return (
      <div>
         <Header />
         <div className="container">
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/listado" element={<ListApp />} />
            </Routes>
         </div>
         <Footer />
      </div>
   );
};

export default App;
