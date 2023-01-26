import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectRoute = () => {
  
  const name = useSelector(state => state.pokemons)

  if (name !== ""){
    return <Outlet/>
  }else{
   return <Navigate to="/"/>
  }

};

export default ProtectRoute;