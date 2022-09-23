import React from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import ListApp from "./components/ListApp";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/listado" element={<ListApp />} />
         </Routes>
         <Footer />
      </>
   );
};

export default App;
