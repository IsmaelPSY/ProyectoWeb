import React from 'react';
import Button from 'react-bootstrap/Button';
import './Diagnostico.css';
import bienestar from './bienestar.png';
import Image from 'react-bootstrap/Image';


const Diagnostico = () => (
  <div className="Diagnostico">

      <iframe src="https://webchat.snatchbot.me/09c9061a53043961a3464b01a9e46e66585bb85448e57502ddc4bf7be33a5474" allow="microphone*"  height="450px" width="450px"></iframe>
      <div>
        <Image className="bienestar" src={bienestar}/>
    </div>
  </div>
)

export default Diagnostico;