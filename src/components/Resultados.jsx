import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { Link } from "react-router-dom";

const Resultados = () => {
   const query = new URLSearchParams(window.location.search);
   const keyword = query.get("keyword");

   const [moviesResults, setMoviesResults] = useState([]);

   useEffect(() => {
      const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=8486241eff6dea37e13e87312ef184a1&language=es-ES&query=${keyword}`;
      axios
         .get(endpoint)
         .then((res) => {
            const moviesArr = res.data.results;

            moviesArr.length === 0
               ? swal(<h5>No se encontraron resultados de {keyword}</h5>)
               : setMoviesResults(moviesArr);
         })
         .catch((error) => {
            console.log(error);
            swal({
               title: "Hubo un error al cargar las películas",
               text: "Por favor intente más tarde",
               icon: "error",
               button: "Cerrar Modal",
            });
         });
   }, [keyword]);

   return (
      <>
         <h2>Buscaste: {keyword}</h2>
         {moviesResults.length === 0 && <h3>No hay resultados</h3>}
         <div className="row mt-3">
            {moviesResults.map((movie) => (
               <div className="col-4" key={movie.id}>
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

export default Resultados;
