import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import PokemonList from '../components/PokemonList';
import { useState } from 'react';
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import InputSearch from '../components/InputSearch';




const Pokedex = () => {
  const {id} = useParams()
  const pokeInfo = useSelector((state) => state.pokemons)
  const [ getUrl, setGetUrl] = useState([])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then(resp => {
     console.log(resp.data.results)
     setGetUrl(resp.data.results)})
    .catch(error => console.log(error))
  },[id])

  

  return (
    <div>

        

      <h2 className='message'>{`Welcome ${pokeInfo}, here you can learn more about pokemons.`}</h2>

      
      <InputSearch/>

      <PokemonList/>
                    
      
       
    </div>
  );
};

export default Pokedex;