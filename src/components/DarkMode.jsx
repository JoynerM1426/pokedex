import React from 'react';
import {useState} from 'react'

const DarkMode = () => {
  const[dark, setDark]= useState(true) 



    document.body.style = dark ? "background: white" : "background:grey"
  




  return (
    <div >
      <button onClick={() => setDark(!dark)}>
     {
        dark === true ? "dia" : "noche"
     }
     </button>
    </div>
  );
};

export default DarkMode;