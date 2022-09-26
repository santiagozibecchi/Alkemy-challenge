import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";
import "../css/bootstrap.min.css";

const Buscador = () => {
   // Para implementar la logica fuera del JSX puedo utilizar la redireccion de useNavigate
   const navigate = useNavigate();

   const handlerSubmit = (e) => {
      e.preventDefault();
      // Capturar el valor del input
      const keyword = e.currentTarget.keyword.value.trim();

      if (keyword.length === 0) {
         swal(<h4>Tienes que escribir una palabra clave</h4>);
      } else if (keyword.length < 4) {
         swal(<h4>Tienes que escribir mas de 4 caracteres</h4>);
      } else {
         e.currentTarget.keyword.value = "";
         navigate(`/resultados?keyword=${keyword}`);
      }
   };

   return (
      <form onSubmit={handlerSubmit} className="d-flex items-center">
         <div className="form-label mt-2 mx-2">
            <input
               placeholder="Buscar..."
               className="form-control"
               type="text"
               name="keyword"
            />
         </div>

         <button className="btn btn-success" type="submit">
            Buscar
         </button>
      </form>
   );
};

export default Buscador;
