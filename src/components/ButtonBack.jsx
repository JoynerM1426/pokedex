import React from 'react';
import { Link } from 'react-router-dom';

const ButtonBack = () => {


  return (
    <div>
     <Link to="/pokedex"> <button className='button-back'> <i class="fa-solid fa-house house"></i>
      </button> </Link>
      
    </div>
  );
};

export default ButtonBack;