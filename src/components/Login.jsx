import { useState } from "react";
// import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const [formValues, setFormValues] = useState({
      email: "",
      password: "",
   });

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();

      const { email, password } = formValues;

      const regexEmail =
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (email === "" || password === "") {
         return swal(<h2>Los campos no pueden estar vacios!</h2>);
      }

      if (!regexEmail.test(email)) {
         return swal(<h2>Email no valido</h2>);
      }

      if (email !== "challenge@alkemy.org" || password !== "react") {
         return swal(<h2>Credenciales invalidas</h2>);
      }

      // Envio de la data una vez que pasa todas las validaciones\
      try {
         // const { token } = await axios.post(
         //    "http://challenge-react.alkemy.org",
         //    formValues
         // );

         // * Esto deberia guardar el token que estoy recibiendo de la peticion correspondiente
         // localStorage.setItem("token-A", token);
         localStorage.setItem("token-A", "66645as54SSSFG5sASDasfad");

         // Redireccionar cuando se logea, si viene el token
         navigate("/listado");

         // * La data devuelve el token
         return swal("Estas logeado");
      } catch (error) {
         console.log(error);
      }
   };

   const handleOnChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
   };

   return (
      <>
         <h2>Formulario de Login</h2>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="email">Email</label>
               <input
                  id="email"
                  type="text"
                  name="email"
                  value={formValues.email}
                  onChange={handleOnChange}
               />
            </div>

            <div>
               <label htmlFor="password">Contraseña</label>
               <input
                  id="password"
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleOnChange}
               />
            </div>

            <button type="submit">Ingresar</button>
         </form>
      </>
   );
};

export default Login;
