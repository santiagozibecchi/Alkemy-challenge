import { useState } from "react";
// import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";

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
         return swal({
            title: "Los campos no pueden estar vacios!",
            text: "Por favor ingrese los datos nuevamente",
            icon: "error",
            button: "Cerrar Modal",
         });
      }

      if (!regexEmail.test(email)) {
         return swal({
            title: "Email no válido!",
            text: "Por favor ingrese los datos nuevamente",
            icon: "error",
            button: "Cerrar Modal",
         });
      }

      if (email !== "challenge@alkemy.org" || password !== "react") {
         return swal({
            title: "Credenciales inválidas!",
            text: "Por favor ingrese los datos nuevamente",
            icon: "error",
            button: "Cerrar Modal",
         });
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
         return swal({
            title: "Estas logeado!",
            text: "Estas en la Página de Listado!",
            icon: "success",
            button: "Cerrar Modal",
         });
      } catch (error) {
         console.log(error);
      }
   };

   const handleOnChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
   };

   return (
      <div className={styles.loginContainer}>
         <h2 className={styles.title}>Formulario de Login</h2>
         <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputContainer}>
               <label htmlFor="email">Email</label>
               <input
                  placeholder="Ingrese su correo electronico"
                  id="email"
                  type="text"
                  name="email"
                  value={formValues.email}
                  onChange={handleOnChange}
               />
            </div>

            <div className={styles.inputContainer}>
               <label htmlFor="password">Contraseña</label>
               <input
                  placeholder="Ingrese su contraseña"
                  id="password"
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleOnChange}
               />
            </div>

            <button className="mt-3 btn btn-secondary" type="submit">
               Ingresar
            </button>
         </form>
      </div>
   );
};

export default Login;
