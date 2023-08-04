import React from "react";
import { describe, expect, test, beforeEach } from "vitest";
import Empty from "./Empty";
import {  screen, userEvent } from '../../utils/test-utils';
import { render,  } from "@testing-library/react";


describe('Empty Component', () => {
  test('should be able to render Empty Component', () => {
    const screen = render(<Empty />)
    expect(screen.getByText('No Items in your basket')).toBeTruthy();
  });


});