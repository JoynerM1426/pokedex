
import {  useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';




const PokedexDetails = () => {
const [data, setData] =  useState({})

const {id} =  useParams()

useEffect(() => {

 axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
 .then(resp => {
  console.log(resp.data)
  setData(resp.data)})
 .catch(error => console.log(error))

},[id])

  return (
  <div className='content-details'>

   <div  className='content-details-2' >
    <img className='pokemon-img' src="/descarga.png" alt="title-pokemon" />

      <div className='details-img'>
        <span className='line-black'></span>
          {
            data.sprites?.other?.dream_world.front_default === null ? <img className='img-details' src={data.sprites?.front_default } alt="" /> : <img className='img-details' src={data.sprites?.other?.dream_world.front_default } alt="" />
          } 
      <span className='bg-white'></span>
      </div>
   
    <div className='card-details'>
        <h1 className='title-card-detail' > <span>{data?.name}</span></h1>
    
            <h3 className='order'>#{data?.order}</h3>
            <h3 className='weight'>Weight: {data?.weight}</h3>
            <h3 className='height'>Height: {data?.height}</h3>
         
        <div className='abilities'>
          <h3>Abilities: </h3>
            {
              data?.abilities?.map((item, index) => 
              <h3 key={index}>{item.ability.name}</h3>  )
            }
        </div>
        <div className='type'>
          <h3>Types: </h3>
          {
            data.types?.map((items, index) => 
            <h3 key={index}>{items.type.name}</h3>
            )
          }
        </div>

   </div>
    </div>
    <div className='content-details-3'>
        <section className='display-move'>
            <div className='content-move'>
              <h2 className='move-title'>Moves</h2>
                {
                  data?.moves?.map((item, index) =>(
                    <li className='li-move' key={index}>{item.move.name}</li>
                  ))
                }
            </div>
        </section>
    </div>
   
  </div>
  );
};

export default PokedexDetails;