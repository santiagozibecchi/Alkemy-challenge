import { useState } from "react";

const Login = () => {
   const [formValues, setFormValues] = useState({
      email: "",
      password: "",
   });

   const handleSubmit = (e) => {
      e.preventDefault();

      const regexEmail =
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (formValues.email === "" || formValues.password) {
         return console.log("Los campos no pueden estar vacios");
      }

      if (!regexEmail.test(formValues.email)) {
         return console.log("Email no valido");
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
