import React from 'react'
import './index.css'

export default function Pokecard({ pokemonFilter }) {
  return (
    <div className='header-total'>
        <h1>PokeDex</h1>
        <form action="">
          <input type="text" onChange={(e) => {pokemonFilter(e.target.value)}} />
        </form>

    </div>
  )
}
