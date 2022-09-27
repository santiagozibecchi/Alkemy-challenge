import { Link, Navigate } from "react-router-dom";
import "../css/bootstrap.min.css";

const Favoritos = ({ addOrRemoveFavs, favoritos }) => {
   //    const [favoritos, setFavoritos] = useState([]);

   //    useEffect(() => {
   //       const favsInLocal = localStorage.getItem("favs-A");

   //       if (favsInLocal !== null) {
   //          const favsArray = JSON.parse(favsInLocal);
   //          setFavoritos(favsArray);
   //       }
   //    }, []);

   let token = sessionStorage.getItem("token-A");

   return (
      <>
         {!token && <Navigate to="/" />}

         <h2 className="mt-4">Tus Peliculas Favoritas</h2>

         {favoritos.length > 0 ? (
            <div className="row">
               {favoritos.map((movie) => (
                  <div className="col-4" key={movie.id}>
                     <div className="card loginmy-4">
                        <img
                           src={`https://image.tmdb.org/t/p/w500${movie.imgURL}`}
                           className="card-img-top"
                           alt="..."
                        />
                        <button
                           className="favourite-btn"
                           onClick={addOrRemoveFavs}
                           data-movie-id={movie.id}
                        >
                           🖤
                        </button>
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
         ) : (
            <h4 className="mt-4">No tienes peliculas guardadas en favoritos</h4>
         )}
      </>
   );
};

export default Favoritos;
