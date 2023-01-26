import { configureStore } from '@reduxjs/toolkit'
import pokeSlice from './slices/poke.slice'

export default configureStore({
  reducer: {
    pokemons: pokeSlice

	}
})