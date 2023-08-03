import { createSlice } from '@reduxjs/toolkit';
import { generatePizza, generateToppings } from '../../mock';
import { capitalize } from '@mui/material';

const initialState = {
  pizzas: generatePizza,
  toppings: generateToppings,
  basket: []
};

const sizeIndex = (sizeName) => {
  return ['small', 'medium', 'large'].findIndex(size => size === sizeName)
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: initialState,
  reducers: {
    addPizza: (state, action) => {
      state.pizza = action.payload;
    },
    addToppings: (state, action) => {
      state.toppings = action.payload;
    },
    addBasket: (state, action) => {
      console.log(state.basket);
      console.log(action.payload);
      const pizza = state.pizzas.find(pizza => pizza.id === action.payload.id)
      const basket = {
        id: action.payload.id,
        name: pizza.name,
        price: pizza.price[sizeIndex(action.payload.size)],
        toppings: action.payload.toppings,
        size: capitalize(action.payload.size)
      }
      state.basket.push(basket);
    },
    removeItem: (state, action) => {
      console.log(action);
      state.basket = state.basket.filter(basket => basket.id !== action.payload);
    }
  }
});

export const { addPizza, addToppings, addBasket, removeItem } = pizzaSlice.actions;

export default pizzaSlice.reducer;