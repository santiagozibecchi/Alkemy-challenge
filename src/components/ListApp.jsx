// import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { fetchApi } from "../helpers/fetchApi";
import swal from "@sweetalert/with-react";
import "../css/bootstrap.min.css";

const ListApp = () => {
   const [moviesList, setMoviesList] = useState([]);

   // Para hacer una redireccion es necesario utilizar useEffect
   // Ejecuta código cada vez que nuestro componente se renderiza.
   let token = sessionStorage.getItem("token-A");

   useEffect(() => {
      // La funcion retorna directamente el array de objetos. El then resuelve la promesa y asigna el valor al estado
      fetchApi()
         .then(setMoviesList)
         .catch((error) => {
            swal({
               title: "Hubo un error al cargar las películas",
               text: "Por favor intente más tarde",
               icon: "error",
               button: "Cerrar Modal",
            });
            console.log(error);
         });
   }, [setMoviesList]);

   // Queremos evitar el renderizado del componte y redirigir al usuario
   // ya que al utilizar la redireccion del navigate el usuario entra en la pagina
   // y despues se lo quita, queremos evitar esto
   // * Solucion: RENDERIZADO CONDICIONAL - short Circuit

   return (
      <>
         {!token && <Navigate to="/" />}

         <div className="row mt-3">
            {moviesList.map((movie) => (
               <div className="col-3" key={movie.id}>
                  <div className="card loginmy-4">
                     <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="card-img-top"
                        alt="..."
                     />
                     <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text text-dark">
                           {movie.overview.slice(0, 50)}...
                        </p>
                        <Link
                           to={`/detalle?movieID=${movie.id}`}
                           className="btn btn-primary"
                        >
                           View Details
                        </Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};

export default ListApp;

/*
You should call navigate() in a React.useEffect(), not when your component is first rendered.
*/
