import { describe, expect, test, vi,  } from "vitest";
import Button from "./Button";
import { render, fireEvent } from "@testing-library/react";


describe('Button Component', () => {
  test('should be able to render Button Component', () => {
    const onClickEvent = vi.fn();
    const label = "Checkout";
    const disabled = false;
 
    const { getByTestId } = render(<Button onClick={onClickEvent} label={label} disabled={disabled}/>)
    expect(getByTestId('button')).toBeTruthy();
  });

  test('should be able to trigger onClickEvent', () => {
    const onClickEvent = vi.fn();
    const label = "Checkout";
    const disabled = false;
 
    const { getByTestId } = render(<Button onClick={onClickEvent} label={label} disabled={disabled}/>)
    fireEvent.click(getByTestId('button'));
    expect(onClickEvent).toHaveBeenCalled();
  });

  test('should not be able to trigger onClickEvent', () => {
    const onClickEvent = vi.fn();
    const label = "Checkout";
    const disabled = true;
 
    const { getByTestId } = render(<Button onClick={onClickEvent} label={label} disabled={disabled}/>)
    fireEvent.click(getByTestId('button'));
    expect(onClickEvent).not.toHaveBeenCalled();
  });
});