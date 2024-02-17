import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { describe, expect, test } from "vitest";
import Subapp from "./Subapp";
import { kebabToCamelCase } from "./utils";

test("button starts with correct color and test", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
});

test("button has correct color after click", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");

  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveClass("blue");
  screen.getByRole("button", { name: /red/i });
});

// test if the checkbox is checked and the button is enabled.

test("if checkbox checked -- button disabled", () => {
  render(<App />);

  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toBeEnabled();

  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement).not.toBeChecked();

  // checkbox is checked
  fireEvent.click(checkboxElement);

  expect(checkboxElement).toBeChecked();
  expect(buttonElement).not.toBeEnabled();
});

test("is checkbox is enabled -- button should be greyed out", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox");

  // default values before click
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("red");
  expect(checkboxElement).not.toBeChecked();

  // checkbox is clicked
  fireEvent.click(checkboxElement);

  // values after click
  expect(buttonElement).not.toBeEnabled();
  expect(buttonElement).toHaveClass("grey");
  expect(checkboxElement).toBeChecked();
});

describe("kebabCaseFunction", () => {
  test("is default values correct", () => {
    render(<Subapp />);
    const buttonElement = screen.getByRole("button", { name: /blue/i });
    const checkboxElement = screen.getByRole("checkbox");

    expect(buttonElement).toBeEnabled();
    expect(buttonElement).toHaveClass("medium-violet-red");
    expect(checkboxElement).not.toBeChecked();
  });

  const testCases = [
    { input: "red", expectedOutput: "Red", description: "no hyphen color" },
    {
      input: "midnight-blue",
      expectedOutput: "Midnight Blue",
      description: "one hyphen color",
    },
    {
      input: "medium-violet-red",
      expectedOutput: "Medium Violet Red",
      description: "two hyphen color",
    },
  ];

  testCases.forEach(({ input, expectedOutput, description }) => {
    test(`is working for ${description}`, () => {
      expect(kebabToCamelCase(input)).toBe(expectedOutput);
    });
  });
});
