import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddMeetup extends Component{
  addMeetup(newMeetup){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/meetups',
      data: newMeetup
    }).then(response => {
      this.props.history.push('/meetups');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    }
    this.addMeetup(newMeetup);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/meetups">Regresar</Link>
       <h1>Registrar Centro de Salud</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
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
          <input type="submit" value="Guardar" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddMeetup;