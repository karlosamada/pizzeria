import { describe, expect, test } from "vitest";
import Card from "./Card";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../store';

describe('Card Component', () => {
  test('should be able to render Card Component', () => {
    const pizza = {
      id: 'pizza-0',
      image: '/images/pizza.jpg',
      name: 'Pizza Name #1',
      price: [5, 15, 20]
    }

    const { getByTestId } = render(
      <Provider store={store}>
        <Card pizza={pizza}/>
      </Provider>
    );

    expect(getByTestId('card-container')).toBeTruthy();
    expect(pizza.name).toBeTruthy();
    expect(`starts at $${pizza.price[0]}`).toBeTruthy();
    expect(getByTestId('button')).toBeTruthy();
  });

  test('should be able to open and close the modal', () => {
    const pizza = {
      id: 'pizza-0',
      image: '/images/pizza.jpg',
      name: 'Pizza Name #1',
      price: [5, 15, 20]
    }

    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Card pizza={pizza}/>
      </Provider>
    );

    
    fireEvent.click(getByTestId('button'));
    expect(getByTestId('modal-component')).toBeTruthy();
    fireEvent.click(getByText('Cancel'));
  });
});