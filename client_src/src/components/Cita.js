import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './estilos.css';



class MasVida extends React.Component{
   

  render(){
    return(<div>
        <form action="" class="formulario">
      <img src="logo.png" class="imgLogo" />

      <h1 class="formulario__titulo">MI APLICACION</h1>
      <h3 class="formulario__subtitulo">Reservas</h3>
      <p class="formulario__parrafo">
        Llena este pequeño formulario para agendar tu cita en MI NEGOCIO.
      </p>

      <label for="cliente" class="formulario__label">¿Cuál es tu nombre?</label>
      <input
        id="cliente"
        type="text"
        class="formulario__input"
        placeholder="Indica cuál es tu nombre completo"
      />

      <label for="cliente" class="formulario__label">¿Cuál es tu apellido?</label>
      <input
        id="apellido"
        type="text"
        class="formulario__input"
        placeholder="Ingrese su apellido completo"
      />

      <label for="cliente" class="formulario__label">¿Cuál es tu correo electrónico?</label>
      <input
        id="correo"
        type="text"
        class="formulario__input"
        placeholder="Escriba su correo electrónico"
      />

      <div id="respuesta"></div>

      <button id="submit" class="formulario__submit">Enviar a WhatsApp</button>
    </form>
    <script src="js/form.js"></script>
    </div>
    );
  }

}

export default MasVida;