import React from "react";

const Login = () => {
   return (
      <form>
         <input type="email" name="email" />
         <input type="password" name="password" />

         <button type="submit">Ingresar</button>
      </form>
   );
};

export default Login;
