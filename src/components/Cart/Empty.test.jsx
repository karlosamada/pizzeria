import { describe, expect, test } from "vitest";
import Empty from "./Empty";
import { render,  } from "@testing-library/react";


describe('Empty Component', () => {
  test('should be able to render Empty Component', () => {
    const screen = render(<Empty />)
    expect(screen.getByText('No Items in your basket')).toBeTruthy();
  });
});