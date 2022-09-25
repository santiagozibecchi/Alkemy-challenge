import axios from "axios";

const endpoint =
   "https://api.themoviedb.org/3/discover/movie?api_key=8486241eff6dea37e13e87312ef184a1&language=es-ES";

export const fetchApi = async () => {
   const {
      data: { results },
   } = await axios.get(endpoint);

   return results;
};

// * Para centralizar el llamado a la API y no estar creando nuevas instancias dentro de cada componente podria utilizar axios.create({})

// * o bien crear una BASE de la url, es decir que sea idem para todas, y a partir de alli ir pasando el resto de urls que necesite. Muy similar a la anterior
// BASE_URL = "https://api.themoviedb.org/3"
