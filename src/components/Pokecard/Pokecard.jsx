import React from 'react'
import './pokecard.css'



export default function Pokecard({name, image, type}){

    const typePoke = ()=>{
        if(type[1]){
            return `${(type[0].type.name).toUpperCase()} | ${(type[1].type.name).toUpperCase()}`
        }

        return (type[0].type.name).toUpperCase();
    }

  return (
        <div className='card'>
            <div className='card-image'>
                <img src={image} alt="" srcset="" width={230}/>
                
            </div>
            <div className='card-description'>
                <h2>{name}</h2>
                <h4>{typePoke()}</h4>

            </div>
        </div>
  )
}
