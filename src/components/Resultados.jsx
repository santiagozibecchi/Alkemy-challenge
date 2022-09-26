import React from "react";

const Resultados = () => {
   let query = new URLSearchParams(window.location.search);
   let keyword = query.get("keyword");

   return <h2>{keyword}</h2>;
};

export default Resultados;
