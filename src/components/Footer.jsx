import React from "react";
import styles from "../css/Footer.module.css";

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <nav>
            <ul>
               <li>
                  <a rel="noopener noreferer" href="https://twitter.com">
                     Twitter
                  </a>
               </li>
               <li>
                  <a rel="noopener noreferer" href="https://twitter.com">
                     Instagram
                  </a>
               </li>
               <li>
                  <a rel="noopener noreferer" href="https://twitter.com">
                     Facebook
                  </a>
               </li>
            </ul>
         </nav>
         <p>Cpyright Alkemy Challenge</p>
      </footer>
   );
};

export default Footer;

// * noopener noreferer - Recomendacion de react para evitar enlaces corruptos
