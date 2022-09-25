import swal from "@sweetalert/with-react";
import "../css/bootstrap.min.css";

const Buscador = () => {
   const handlerSubmit = (e) => {
      e.preventDefault();
      // Capturar el valor del input
      const keyword = e.currentTarget.keyword.value;

      if (keyword.length === 0) {
         swal(<h4>Tienes que escribir una palabra clave</h4>);
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
