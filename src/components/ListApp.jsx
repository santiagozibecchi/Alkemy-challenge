import { Link, Navigate } from "react-router-dom";
import "../css/bootstrap.min.css";

const ListApp = () => {
   // Para hacer una redireccion es necesario utilizar useEffect
   // Ejecuta código cada vez que nuestro componente se renderiza.
   let token = localStorage.getItem("token-A");

   // Queremos evitar el renderizado del componte y redirigir al usuario
   // ya que al utilizar la redireccion del navigate el usuario entra en la pagina
   // y despues se lo quita, queremos evitar esto
   // * Solucion: RENDERIZADO CONDICIONAL - short Circuit

   return (
      <>
         {!token && <Navigate to="/" />}

         {/* Estructura base */}
         <div className="row mt-3">
            <div className="col-3">
               <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                     <h5 className="card-title">Movie title</h5>
                     <p className="card-text text-dark">
                        Movie Review. Some quick example text to build on the
                        card title and make.
                     </p>
                     <Link href="/" className="btn btn-primary">
                        View Details
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ListApp;

/*
You should call navigate() in a React.useEffect(), not when your component is first rendered.
*/
