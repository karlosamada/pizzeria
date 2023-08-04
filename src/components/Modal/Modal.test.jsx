import { describe, expect, test, vi,  } from "vitest";
import Modal from "./Modal";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../store';
import { initialState } from "../../store/pizzaSlice";

describe('Modal Component', () => {
  test('should be able to render Modal Component', () => {
    const pizza = initialState.pizzas[0];
    const toppings = initialState.toppings;
    const open = true;
    const handleClose = vi.fn();

    const props = {
      pizza,
      toppings,
      open,
      handleClose
    }
 
    const { getByTestId, getByText } = render(
      <Provider store={store}> 
        <Modal {...props}/>
      </Provider>
    );

    expect(getByTestId('modal-component')).toBeTruthy();
    expect(getByText(toppings[0].name)).toBeTruthy();
    expect(getByText(pizza.name)).toBeTruthy();
    expect(getByText('Size')).toBeTruthy();
    expect(getByText(`Small - $${pizza.price[0]}`)).toBeTruthy();
    expect(getByText(`Medium - $${pizza.price[1]}`)).toBeTruthy();
    expect(getByText(`Large - $${pizza.price[2]}`)).toBeTruthy();
  });

  test('should be able to select toppings and size', () => {
    const pizza = initialState.pizzas[0];
    const toppings = initialState.toppings;
    const open = true;
    const handleClose = vi.fn();

    const props = {
      pizza,
      toppings,
      open,
      handleClose
    }
 
    const screen = render(
      <Provider store={store}> 
        <Modal {...props}/>
      </Provider>
    );

    fireEvent.click(screen.getByText(toppings[0].name));
    fireEvent.click(screen.getByText(`Small - $${pizza.price[0]}`));
    fireEvent.click(screen.getByText("Submit"));
    expect(props.handleClose).toHaveBeenCalled();
  });
});