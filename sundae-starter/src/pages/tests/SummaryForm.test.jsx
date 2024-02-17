import { expect } from "chai";
import SummaryForm from "../summary/SummaryForm";
import { fireEvent, render, screen } from "@testing-library/react";

test("checkbox not clicked by default", () => {
  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement).not.toBeChecked();
});

test("checkbox enables button", () => {
  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox");
  const buttonElement = screen.getByRole("button", {
    name: /Confirm Order/i,
  });

  expect(buttonElement).not.tobe;
  fireEvent.click(checkboxElement);
});
