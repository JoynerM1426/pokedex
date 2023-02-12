
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PokedexDetails from '../views/PokedexDetails';


const InputSearch = () => {
 const [data, setData] = useState([])
 const [names, setNames] = useState("")
 const navigate = useNavigate()
  // input de buscar por nombre

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?${names}/`)
    .then((resp) => 
      setData(resp?.data?.results))
    .catch(error => console.log(error))

  },[names])

  const search = (e) => {
    // console.log(e.target.name.value);
    e.preventDefault()
    const input = e.target.name.value.trim().toLowerCase()
    navigate(`/pokedex/${input}`)
    // setNames(input)

  }

  
  return (
    <div className='content-search'>

           <form className='form-search' onSubmit={(e) => search(e)}>
              <input 
              type="text"
              placeholder='Search pokemons'
              className='input-search'
              id='name' />
              <button className='button-search' type='submit'> <i className="fa-solid fa-magnifying-glass"/></button>
           </form>
          


    
    </div>
  );
};

export default InputSearch;