import { render, screen } from "@testing-library/react";
import Options from "../Options";
import { expect } from "vitest";

test("is displaying images with the right topping properly", async () => {
  render(<Options optionType="toppings" />);

  const arrayOfImages = await screen.findAllByAltText(/topping$/i);
  expect(arrayOfImages).toHaveLength(2);
});
