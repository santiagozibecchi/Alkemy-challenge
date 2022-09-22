import { useState } from "react";
import axios from "axios";

const Login = () => {
   const [formValues, setFormValues] = useState({
      email: "",
      password: "",
   });

   const handleSubmit = async (e) => {
      e.preventDefault();

      const { email, password } = formValues;

      const regexEmail =
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (email === "" || password === "") {
         return console.log("Los campos no pueden estar vacios");
      }

      if (!regexEmail.test(email)) {
         return console.log("Email no valido");
      }

      if (email !== "challange@alkemy.org" || password !== "react") {
         return console.log("Credenciales invalidas");
      }

      // Envio de la data una vez que pasa todas las validaciones\
      try {
         const { data } = await axios.post(
            "http://challange-react.alkemy.org",
            { email, password }
         );
         console.log(data);
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
