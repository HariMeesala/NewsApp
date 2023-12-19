import React from 'react'
import './Card.css'
import alterImg from '../assets/alterImg.png'

export default function Card( props ) {

  
  return (
    <div className='card-item'>
        <h2>{props.title}...</h2>
        {
          props.image ? <img src={props.image} alt=''  /> : <img src={alterImg} alt=''  />
        }
        <p>{props.description}...<a href={props.url} >see more</a></p>
        
    </div>
  )
}
