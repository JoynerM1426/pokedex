import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Pokedex from './views/Pokedex'
import PokedexDetails from './views/PokedexDetails'
import DarkMode from './components/DarkMode'
import './App.css'
import ProtectRoute from './views/ProtectRoute'


function App() {

  
 

  return (

    <BrowserRouter>
       <div className="App">
  
    
          {/* <DarkMode/> */}
       <Routes>
          <Route
          path="/"
          element= {<Home/>}
          />
          <Route element={<ProtectRoute/>}>
            <Route
            path="/pokedex"
            element= {<Pokedex/>}
            />
            <Route
            path="/pokedex/:id"
            element= {<PokedexDetails/>}
            />
          </Route>

       </Routes>
      

    </div>
    </BrowserRouter>
  )
}

export default App
