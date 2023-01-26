
import {  useDispatch } from "react-redux";
import { nameInput } from "../store/slices/poke.slice";
import {useNavigate} from "react-router-dom"
import React from 'react';


const Home = () => {

  // const pokeInfo = useSelector((state) => state.pokemons)
  
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const lookTheValue = (e)=> {
    e.preventDefault()

    dispatch(nameInput(e.target[0].value))

    navigate("/pokedex")
   
  }

  return (
    <div className="all-home">

      <h2>Hello Trainer!</h2>

        <img className="ash" src="Ash_Ketchum_29.webp" alt="ash-ketchum" />
        
        <img className="img-arrow" src="flecha-hacia-arriba.png" alt="arrow" />
        
        <div className="content-form-home">
          <form className="form-home" onSubmit={(e) => lookTheValue(e)}>
          <input 
          className="input-home"
          type="text" 
          placeholder="Write your name"
          />
          <button className="button-home" ><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
       </div>
      
    </div>
  );
};

export default Home;