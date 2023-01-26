import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokeSlice = createSlice({
		name: "pokemons",
    initialState:"",
    reducers: {
       nameInput:(state, action) => {
          
        return action.payload
        }
    }
})

export const { nameInput } = pokeSlice.actions;

export default pokeSlice.reducer;