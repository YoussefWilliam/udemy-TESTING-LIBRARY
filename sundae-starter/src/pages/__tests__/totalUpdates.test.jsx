import { render, screen } from "../../test-utils/testing-libraries-utils";
import { expect } from "vitest";
import Options from "../entry/Options";
import { userEvent } from "@testing-library/user-event";
import OrderEntry from "../entry/OrderEntry";

test("update scoop subtotal when scoops change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);

  const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });

  expect(scoopsSubtotal).toHaveTextContent("0.00");

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  const chocolate = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });

  // to have 1 vanilla scoop and checkout
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");

  // to have 2 chocolate scoops and checkout

  await user.clear(chocolate);
  await user.type(chocolate, "2");
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});

test("update toppings subtotal when toppings change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="toppings" />);

  const toppingsSubtotal = screen.getByText("Toppings total: $", {
    exact: false,
  });

  expect(toppingsSubtotal).toHaveTextContent("0.00");

  const mms = await screen.findByRole("checkbox", {
    name: "M&Ms",
  });

  await user.click(mms);
  expect(toppingsSubtotal).toHaveTextContent("1.50");

  const hotFudge = screen.getByRole("checkbox", {
    name: "Hot fudge",
  });

  await user.click(hotFudge);
  expect(toppingsSubtotal).toHaveTextContent("3.00");

  // too expensive -- remove hotfudge and update subtotal
  await user.click(hotFudge);
  expect(toppingsSubtotal).toHaveTextContent("1.50");
});

describe("grand total tests", () => {
  test("grand total is $0.00 by default", () => {
    render(<OrderEntry />);
    const grandTotalText = screen.getByText("Grand total: $", { exact: false });
    expect(grandTotalText).toHaveTextContent("0.00");
  });

  test("is adding one chocolate scoop reflect the right price", async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const grandTotalText = screen.getByRole("heading", {
      name: /Grand total: \$/i,
    });
    const chocolateInput = await screen.findByRole("spinbutton", {
      name: "Chocolate",
    });

    await user.clear(chocolateInput);
    await user.type(chocolateInput, "1");
    expect(grandTotalText).toHaveTextContent("2.00");
  });

  test("is adding hot fudge topping reflect the right price", async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const grandTotalText = screen.getByRole("heading", {
      name: /Grand total: \$/i,
    });
    const hotFudgeTopping = await screen.findByRole("checkbox", {
      name: "Hot fudge",
    });
    const chocolateInput = await screen.findByRole("spinbutton", {
      name: "Chocolate",
    });

    await user.clear(chocolateInput);
    await user.type(chocolateInput, "1");

    await user.click(hotFudgeTopping);
    expect(grandTotalText).toHaveTextContent("3.50");
  });
  test("removing expensive hot fudge topping reflects the right price", async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const grandTotalText = screen.getByRole("heading", {
      name: /Grand total: \$/i,
    });
    const hotFudgeTopping = await screen.findByRole("checkbox", {
      name: "Hot fudge",
    });
    const chocolateInput = await screen.findByRole("spinbutton", {
      name: "Chocolate",
    });

    await user.clear(chocolateInput);
    await user.type(chocolateInput, "1");
    await user.click(hotFudgeTopping);
    expect(grandTotalText).toHaveTextContent("3.50");

    await user.click(hotFudgeTopping);
    expect(grandTotalText).toHaveTextContent("2.00");
  });
});
