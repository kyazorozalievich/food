import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basket: JSON.parse(localStorage.getItem('basket')) || [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
     getBasket: (state, action) => {
        let getBas =  [...state.basket, action.payload]
        localStorage.setItem('basket', JSON.stringify(getBas))
        state.basket = getBas
     },
     delBasket: (state, action) => {
        let delBas = state.basket.filter(item => item._id !== action.payload._id)
        localStorage.setItem('basket', JSON.stringify(delBas))
        state.basket = delBas
     },
     incerementBasket: (state, action) => {
        let inBas = state.basket.map(item => item._id === action.payload._id? {...item, count: item.count + 1} : item)
        localStorage.setItem('basket', JSON.stringify(inBas))
        state.basket = inBas
     },
     decrementBasket: (state, action) => {
        let deBas = state.basket.map(item => item._id === action.payload._id && item.count > 1? {...item, count: item.count - 1} : item)
        localStorage.setItem('basket', JSON.stringify(deBas))
        state.basket = deBas
     }
    }
})

export const {getBasket, delBasket, incerementBasket, decrementBasket} = basketSlice.actions
export default basketSlice.reducer

