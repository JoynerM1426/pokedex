import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import PokemonCard from './PokemonCard';

const PokemonList = () => {
 const [data, setData] = useState([])
 const [ type, setType] = useState([])

 
 

 useEffect(()=>{

  
  axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279/`)
  .then((resp) => 
    setData(resp?.data?.results))
  .catch(error => console.log(error))


   axios.get(`https://pokeapi.co/api/v2/type/`)
  .then(resp => setType ( resp.data.results))
  .catch(error => console.log(error))

 

 },[])

  // selector por tipo

   const lookType = (e) => {
   const url= e.target.value

   axios.get(url)
   .then(resp => {setData(resp.data.pokemon)
    setPage(1)
    console.log(resp.data.pokemon)})
   .catch(error => console.log(error))
   
  }

  // paginas
  const[page, setPage] = useState(1)
  const pokemonsForPage = 10
  const lastIndex = page * pokemonsForPage
  const firstIndex = lastIndex - pokemonsForPage
 
  // conteo de paginas
  const countPokemon = data?.slice(firstIndex, lastIndex)

  const totalPages =Math.ceil( data.length / pokemonsForPage )

  const numberPages = []

  for(let i = 1; i < totalPages; i ++){
    numberPages.push(i)
  }
 
 
  


  return (
    <div className='list-card'>
          
        <div className='filter-by-type'>

            <select   id="" onChange={lookType}> 
                {
                  type?.map((item) => (
                    <option value={item?.url} key={item?.name}>{item.name}</option>
                  ))
                }
            </select>
        </div>
      
      <ul className='list-map'>
        
          {countPokemon.map((items, index) => (
            <PokemonCard
            key={index}
            url={ items.pokemon ? items.pokemon.url : items.url}
            />
          ))}
    
      </ul>
      
      <div>
              <button className='prev'
              onClick={() => setPage(page - 1)}
              disabled={ page === 1 }>
              Prev</button>

              {/* {

                numberPages.map((number ) => (
                  <button 
                  onClick={() => setPage(number)}
                  key={number}>
                    {number}
                  </button>
                ))

              } */}

              <button className='next'
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}>
              Next</button>
           </div>

           
      
    </div>
  );
};

export default PokemonList;