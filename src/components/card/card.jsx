import React from 'react';
import './card-style.css';

const Card = ({monster}) => {
    const {id,name,email} = monster;
  return (
    <div className='card-container'>
        <img src={`https://robohash.org/${id}?size=100x100`} alt="" />
        <h2> {name} </h2>
        <p> {email} </p>
    </div>
  )
}

export default Card;