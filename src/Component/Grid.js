import React from 'react';
import '../App.css';

export default function Grid(props) {
    return (
    <div className="grid_inside">
        <img src = {props.avatar} alt = "image" className='gridimage'/>
        <h1>{props.name}</h1>
        <h5>Email: {props.email}</h5>
    </div>
  )
}
