import { Navigate } from "react-router-dom";

const Detalle = () => {
   let token = sessionStorage.getItem("token-A");

   return (
      <>
         {!token && <Navigate to="/" />}
         <h2>Detalle de la pelicula</h2>
      </>
   );
};

export default Detalle;

// * Acceso a sesionStorage
// Este se borra cuando cerramos el navegador
// LS: la informacion persiste hasta que la elimine
