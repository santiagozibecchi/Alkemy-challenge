import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import swal from "@sweetalert/with-react";
import "../css/bootstrap.min.css";

const Detalle = () => {
   const [details, setDetails] = useState(null);

   let token = sessionStorage.getItem("token-A");
   let query = new URLSearchParams(window.location.search);
   let movieID = query.get("movieID");

   useEffect(() => {
      axios
         .get(
            `https://api.themoviedb.org/3/movie/${movieID}?api_key=8486241eff6dea37e13e87312ef184a1&language=es-ES`
         )
         .then((res) =>
            setTimeout(() => {
               setDetails([res.data]);
            }, 1300)
         )

         .catch((error) => {
            swal({
               title: "Hubo un error al cargar las películas",
               text: "Por favor intente más tarde",
               icon: "error",
               button: "Cerrar Modal",
            });
            console.log(error);
         });
   }, [movieID]);

   console.log(details);

   return (
      <>
         {!token && <Navigate to="/" />}

         {!details && (
            <div className="d-flex justify-content-center mt-3">
               <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
               </div>
            </div>
         )}

         {details?.map((detail) => (
            <div key={detail.id}>
               <h5>{detail.title}</h5>
               <div className="row">
                  <div className="col-4">
                     <img
                        alt="..."
                        className="card-img-top"
                        src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
                     />
                  </div>
                  <div className="col-8">
                     <h5>Fecha de estreno: {detail.release_date}</h5>
                     <h5>Reseña</h5>
                     <p style={{ color: "black" }}>{detail.overview}</p>
                     <h5>Generos</h5>
                     <ul>
                        {detail.genres.map((genero) => (
                           <li key={genero.id}>{genero.name}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
};

export default Detalle;

// * Acceso a sesionStorage
// Este se borra cuando cerramos el navegador
// LS: la informacion persiste hasta que la elimine

// URLSearchParams() -> funcion de javascript
// window.location.search -> ubicacion de la url donde nos encontramos
