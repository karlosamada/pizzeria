import { createSlice } from '@reduxjs/toolkit';
import { generatePizza, generateToppings } from '../../mock';
import { capitalize } from '@mui/material';

export const initialState = {
  pizzas: generatePizza,
  toppings: generateToppings,
  basket: [],
  total: 0
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
      const pizza = state.pizzas.find(pizza => pizza.id === action.payload.id)

      const basket = {
        id: action.payload.id,
        name: pizza.name,
        price: pizza.price[sizeIndex(action.payload.size)],
        toppings: action.payload.toppings,
        size: capitalize(action.payload.size)
      }

      state.total += basket.price;
      state.basket.push(basket);
    },
    removeItem: (state, action) => {
      state.total -= state.basket.find(basket => basket.id === action.payload).price;
      state.basket = state.basket.filter(basket => basket.id !== action.payload);
    },
    emptyBasket: (state) => {
      state.basket = [];
    },
    checkout: (state) => {
      // api call to checkout
      console.log(state.basket);
      console.log(state.total);

    }
  }
});

export const { addPizza, addToppings, addBasket, removeItem, emptyBasket, checkout } = pizzaSlice.actions;

export default pizzaSlice.reducer;