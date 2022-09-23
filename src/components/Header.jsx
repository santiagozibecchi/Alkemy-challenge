import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <Link to="/home">Home</Link>
               </li>
               <li>
                  <Link to="/listado">Listado</Link>
               </li>
               <li>
                  <Link to="/contacto">Contacto</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;

// Como estamos en una SPA no vamos a utilizar el elemento HTML <a></a> porque se refrescaria todo el documento HTML, queremos evitar eso porque no seria una buena practica

// * Link evita que se refresque la pagina
