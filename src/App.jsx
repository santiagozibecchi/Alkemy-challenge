import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Login from "./components/Login";
import ListApp from "./components/ListApp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";

// Styles
import styles from "./css/App.module.css";
import Resultados from "./components/Resultados";

const App = () => {
   useParams();

   return (
      <div>
         <Header />
         <div className={styles.container}>
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/listado" element={<ListApp />} />
               <Route path="/detalle" element={<Detalle />} />
               <Route path="/resultados" element={<Resultados />} />
            </Routes>
         </div>
         <Footer />
      </div>
   );
};

export default App;
