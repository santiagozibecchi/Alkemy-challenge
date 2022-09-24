import axios from "axios";

const endpoint =
   "https://api.themoviedb.org/3/discover/movie?api_key=8486241eff6dea37e13e87312ef184a1&language=es-ES";

export const fetchApi = async () => {
   const {
      data: { results },
   } = await axios.get(endpoint);
   console.log(results);

   return results;
};
