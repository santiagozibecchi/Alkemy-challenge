import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ListApp from "./components/ListApp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";

// Styles
import "./css/app.css";
import styles from "./css/App.module.css";
import Favoritos from "./components/Favoritos";

const App = () => {
   // Para que sea el componente App quien se encargue de implementar la estructura del estado y que este lo comparta a favoritos y de esta manera cualquier cambio en el localStorage se actualize y renderice los nuevos favoritos
   const [favoritos, setFavoritos] = useState([]);

   useEffect(() => {
      const favsInLocal = localStorage.getItem("favs-A");

      if (favsInLocal !== null) {
         const favsArray = JSON.parse(favsInLocal);
         setFavoritos(favsArray);
      }
   }, []);

   // ------------------------

   const addOrRemoveFavs = (e) => {
      const favMovies = localStorage.getItem("favs-A");
      let tempMoviesInFavs;

      if (favMovies === null) {
         tempMoviesInFavs = [];
      } else {
         tempMoviesInFavs = JSON.parse(favMovies);
      }

      // Capturo el evento que recibe la funcion del boton
      const btn = e.currentTarget;
      //  Del boton, me interesa saber el evento del elemento padre
      const parent = btn.parentElement;
      // ----------------------------
      const imgURL = parent.querySelector("img").getAttribute("src");
      const title = parent.querySelector("h5").innerText;
      const overview = parent.querySelector("p").innerText;

      const movieData = {
         imgURL,
         title,
         overview,
         id: btn.dataset["movieId"],
      };

      // Me sirve para saber si la pelicula se encuentra o no en el LS
      // Si no encuentra nada devuelve null
      let movieIsInArray = tempMoviesInFavs.find(
         (oneMovie) => oneMovie.id === movieData.id
      );

      // * GUARDAMOS LA INFO EN EL LOCALSTORAGE
      if (!movieIsInArray) {
         tempMoviesInFavs.push(movieData);
         localStorage.setItem("favs-A", JSON.stringify(tempMoviesInFavs));
         setFavoritos(tempMoviesInFavs);

         console.log("Se agrego pelicula");
      } else {
         // Si encuentra una pelicula cae aca
         let moviesLeft = tempMoviesInFavs.filter(
            (oneMovie) => oneMovie.id !== movieData.id
         );
         // Devuelve todas las peliculas del array que sean oneMovie.id menos movieData.id
         localStorage.setItem("favs-A", JSON.stringify(moviesLeft));
         setFavoritos(moviesLeft);

         console.log("Se elimino la pelicula");
      }
   };

   return (
      <div>
         <Header favoritos={favoritos} />
         <div className={styles.container}>
            <Routes>
               <Route path="/" element={<Login />} />
               <Route
                  path="/listado"
                  element={<ListApp addOrRemoveFavs={addOrRemoveFavs} />}
               />
               <Route path="/detalle" element={<Detalle />} />
               <Route
                  path="/resultados"
                  element={<Resultados addOrRemoveFavs={addOrRemoveFavs} />}
               />
               <Route
                  path="/favoritos"
                  element={
                     <Favoritos
                        addOrRemoveFavs={addOrRemoveFavs}
                        favoritos={favoritos}
                     />
                  }
               />
            </Routes>
         </div>
         <Footer />
      </div>
   );
};

export default App;
