import { describe, expect, test, vi } from "vitest";
import ShoppingCart from "./ShoppingCart";
import { render, fireEvent } from "@testing-library/react";


describe('ShoppingCart Component', () => {
  test('should be able to render ShoppingCart Component', () => {
    const basket = [{
      id: '1',
      name: 'Pizza',
      price: 15,
      size: 'Medium',
      toppings: ['Topping #6']
    }]
    const removeItem = vi.fn();
  
    const { getByTestId } = render(<ShoppingCart basket={basket} removeItem={removeItem}/>)
    expect(getByTestId('cart-item')).toBeTruthy();
  });

  test('should be able to render the details of pizza', () => {
    const basket = [{
      id: '1',
      name: 'Pizza',
      price: 15,
      size: 'Medium',
      toppings: ['Topping #6']
    }]
    const removeItem = vi.fn();
  
    const screen = render(<ShoppingCart basket={basket} removeItem={removeItem}/>)

    expect(screen.getByText(`1 x ${basket[0].name}`)).toBeTruthy();
    expect(screen.getByText(`${basket[0].size}, ${basket[0].toppings[0]}`)).toBeTruthy();
    expect(screen.getByText(`$${basket[0].price}`)).toBeTruthy();
  });

  test('should be able to fire the removeItem function', () => {
    const basket = [{
      id: '1',
      name: 'Pizza',
      price: 15,
      size: 'Medium',
      toppings: ['Topping #6']
    }]
    const removeItem = vi.fn();
  
    const { getByTestId } = render(<ShoppingCart basket={basket} removeItem={removeItem}/>)
    fireEvent.click(getByTestId('remove-item'));

    expect(removeItem).toHaveBeenCalled();
  });
});