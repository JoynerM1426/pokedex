import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const PokemonCard = ({ url }) => {

 const navigate =  useNavigate()
   
    const [ detail, setDetail ] = useState({})
   

    useEffect( () => {

      axios
      .get(url)
      .then((resp) => setDetail(resp.data));
     
    }, [url] )
  
    const handleClick = () => {
        navigate(  `/pokedex/${detail.id}` )
    }
    return (
        <div className='all_list' onClick={handleClick} >
            <ul className='ul-card' >

                <li  className="pokemon-card">
                    
                    {
                        detail.sprites?.other?.dream_world.front_default === null ? <img src={detail.sprites?.front_default } alt="" />  :
                        <img className='img-card' src={ detail.sprites?.other?.dream_world.front_default } alt="" /> 
                    }
                    
                 </li>
                 <img className='poke-ball' src="/public/pokebola.png" alt="" />

                 <li className='content-card'>
                        <div className='div-name-card'>
                         <h2 className='name'>{ detail?.name }</h2>
                        </div>
                        <h4 className='types'>Types: <span>
                        {detail.types?.[0]?.type.name} </span>
                        <span>
                        {detail.types?.[1]?.type.name}</span>
                        </h4>
                        <h4 className='hp'>Hp: <span>{detail.stats?.[0].base_stat}</span> </h4>
                        <h4 className='attack'>Attack: <span>{detail.stats?.[1].base_stat}</span></h4>
                        <h4 className='defense'>Defense: <span>{detail.stats?.[2].base_stat}</span></h4>
                        <h4 className='speed'>Speed: <span>{detail.stats?.[5].base_stat}</span></h4>
                 </li>
               
            </ul>
        </div>
    )

}

export default PokemonCard
