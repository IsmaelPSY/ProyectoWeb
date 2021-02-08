import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Meetup.css';

class MeetupItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:props.item
    }
  }

  render(){
    return (
      <li className="collection-item">
        <Link to={`/meetups/${this.state.item.id}`}>{this.state.item.name}</Link><span> - - - - - </span>
        <p>{this.state.item.city}</p><span> - - - - - </span> <p>{this.state.item.address}</p>
      </li>
    )
  }
}

export default MeetupItem;