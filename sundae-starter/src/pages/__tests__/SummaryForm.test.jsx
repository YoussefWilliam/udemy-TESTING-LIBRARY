import { expect } from "chai";
import SummaryForm from "../summary/SummaryForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("checkbox not clicked by default", () => {
  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement).not.toBeChecked();
});

test("checkbox enables button", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox");
  const buttonElement = screen.getByRole("button", {
    name: /Confirm Order/i,
  });

  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).not.toBeEnabled();

  await user.click(checkboxElement).then(() => {
    expect(checkboxElement).toBeChecked();
    expect(buttonElement).toBeEnabled();
  });
});

test("un-checking the checkbox disables the button again", async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox");
  const buttonElement = screen.getByRole("button", {
    name: /Confirm Order/i,
  });

  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).not.toBeEnabled();

  await user.click(checkboxElement);

  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toBeEnabled();

  await user.click(checkboxElement);

  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).not.toBeEnabled();
});

describe("pop-hovers reflect properly on hovering", () => {
  test("is initially not yet displayed before hovering", () => {
    render(<SummaryForm />);
    const queryItem = screen.queryByText(
      /No ice cream will actually be delivered/i
    );
    expect(queryItem).not.toBeInTheDocument();
  });

  test("is displayed upon hovering", async () => {
    render(<SummaryForm />);
    const user = await userEvent.setup();

    const termsAndConditions = screen.getByText("Terms and Conditions");

    user.hover(termsAndConditions).then(() => {
      const queryItem = screen.getByText(/why did you hover?/i);
      expect(queryItem).toBeInTheDocument();
    });
  });

  test("disappears after moving the mouse", async () => {
    render(<SummaryForm />);
    const user = await userEvent.setup();

    const termsAndConditions = screen.getByText("Terms and Conditions");

    user.unhover(termsAndConditions).then(() => {
      const queryItem = screen.queryByText(/why did you hover?/i);
      expect(queryItem).not.toBeInTheDocument();
    });
  });
});
