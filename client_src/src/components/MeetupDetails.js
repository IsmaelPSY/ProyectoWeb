import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class MeetupDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount(){
    this.getMeetup();
  }

  getMeetup(){
    let meetupId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
    .then(response => {
      this.setState({details: response.data}, () => {
        console.log(this.state);
      })
  })
  .catch(err => console.log(err));
  }

  onDelete(){
    let meetupId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response => {
        this.props.history.push('/meetups');
      }).catch(err => console.log(err));
  }

  render(){
    return (
     <div>
       <br />
       <Link className="btn grey" to="/meetups">Regresar</Link>
       <h1>{this.state.details.name}</h1>
       <ul className="collection">
        <li className="collection-item">Descripcion: {this.state.details.city}</li>
        <li className="collection-item">Contacto: {this.state.details.address}</li>
        </ul>
        <Link className="btn" to={`/meetups/edit/${this.state.details.id}`}> Editar</Link>
        <button onClick={this.onDelete.bind(this)} className="btn red right">Eliminar</button>
      </div>
    )
  }
}

export default MeetupDetails;