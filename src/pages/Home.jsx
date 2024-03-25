import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Pokecard from '../components/Pokecard/Pokecard'
import axios from 'axios'
import './home.css'



export const Home = () => {
    const [pokemons, setPokemons] = useState([])
    
    useEffect(()=>{
        getPokemon()
    },[])

    const getPokemon = () => {
        var endPoints = [];
        for (var i=1; i <= 300; i++){
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endPoints.map((end) => axios.get(end))).then((res) => setPokemons(res));
    }


    const filterPoke = (name)=>{
        if(name == ''|| name == undefined || name == null ){
            getPokemon()
        }
        var filteredPokemon = []
        for(let i in pokemons){
            if(pokemons[i].data.name.includes(name)){
            
                filteredPokemon.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemon)
        
    }
    
  return (
    <div>
        <Navbar pokemonFilter = {filterPoke}></Navbar> 
        <div className="container">

        
        {
            pokemons.map((p) => (
                <Pokecard name={(p.data.name).toUpperCase()} image={p.data.sprites.front_default} type={p.data.types}></Pokecard>
            ))
        }
        </div>
        
    </div>
  )
}
