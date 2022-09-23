import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ListApp = () => {
   const navigate = useNavigate();

   // Para hacer una redireccion es necesario utilizar useEffect
   // Ejecuta código cada vez que nuestro componente se renderiza.
   useEffect(() => {
      const token = localStorage.getItem("token-A");
      console.log(token);
      if (token === null) {
         navigate("/");
      }
   }, []);

   return <h2>Listado</h2>;
};

export default ListApp;

/*
You should call navigate() in a React.useEffect(), not when your component is first rendered.
*/
