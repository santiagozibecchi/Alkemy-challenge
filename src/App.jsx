import React from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import ListApp from "./components/ListApp";

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/listado" element={<ListApp />} />
         </Routes>
      </>
   );
};

export default App;
