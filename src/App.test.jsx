import { describe, expect, test,  } from "vitest";
import App from "./App";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";


describe('App Component', () => {
  test('should be able to render App Component', () => {    
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText('Pizzeria')).toBeTruthy();
  });
});