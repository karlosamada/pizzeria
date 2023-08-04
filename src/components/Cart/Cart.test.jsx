import { describe, expect, test } from "vitest";
import Cart from "./Cart";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../store';

describe('Cart Component', () => {
  test('should be able to render Cart Component', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(getByTestId('cart-container')).toBeTruthy();
  });

  test('should be able to Empty Basket', () => {
    const screen = render(
        <Provider store={store}>
          <Cart />
        </Provider>
      );

      expect(screen.getByText('No Items in your basket')).toBeTruthy();
  });
});