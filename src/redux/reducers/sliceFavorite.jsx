import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favorite: [],
    
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        getFavorite: (state, action) => {
            let getFav = [...state.favorite, action.payload]
            localStorage.setItem('favorite', JSON.stringify(getFav))
            state.favorite = getFav
        },
        delFavorite: (state, action) => {
            let delFav = state.favorite.filter(item => item._id !== action.payload._id)
            localStorage.setItem('favorite', JSON.stringify(delFav))
            state.favorite = delFav
        },
    }
})

export const { getFavorite, delFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer