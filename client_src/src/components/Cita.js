import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';




class MasVida extends React.Component{

  render(){
    return(
    <div className="Home">
      <React.Fragment >
      <br />
       <Link className="btn grey" to="/meetups">Regresar</Link>
       <h1>Registrar Centro de Salud</h1>
       <form >
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Nombre</label>
          </div>
          <div className="input-field">
            <input type="text" name="city" ref="city" />
            <label htmlFor="city">Descripcion</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref="address" />
            <label htmlFor="address">Contacto</label>
          </div>
          <Button href="https://api.whatsapp.com/send?phone=123456&text=Esto%20es%20una%20prueba.">Enviar</Button>
        </form>
      </React.Fragment>
      </div>
    );
  }

}

export default MasVida;