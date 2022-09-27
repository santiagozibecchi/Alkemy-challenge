import React from "react";
import { Link } from "react-router-dom";
import Buscador from "./Buscador";
import styles from "../css/Header.module.css";

const Header = ({ favoritos }) => {
   return (
      <header className={styles.header}>
         <nav className={styles.navbar}>
            <ul>
               <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                     ALKEMY CHALLENGE
                  </Link>
               </li>
               <li>
                  <Link style={{ textDecoration: "none" }} to="/listado">
                     Listado
                  </Link>
               </li>
               <li>
                  <Link style={{ textDecoration: "none" }} to="/favoritos">
                     Favoritos
                  </Link>
               </li>
               <li>
                  {favoritos.length > 0 ? (
                     <span>Peliculas en favoritos: {favoritos.length}</span>
                  ) : (
                     <span>No tiene peliculas en Fav.</span>
                  )}
               </li>
            </ul>
         </nav>
         <div className={styles.flexDiv}>
            <Buscador />
         </div>
      </header>
   );
};

export default Header;

// Como estamos en una SPA no vamos a utilizar el elemento HTML <a></a> porque se refrescaria todo el documento HTML, queremos evitar eso porque no seria una buena practica

// * Link evita que se refresque la pagina
