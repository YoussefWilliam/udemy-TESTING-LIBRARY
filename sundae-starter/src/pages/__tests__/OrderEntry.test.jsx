import { expect, test } from "vitest";
import { server } from "../../mocks/server";
import { HttpResponse, http } from "msw";
import OrderEntry from "../entry/OrderEntry";
import { render, screen } from "../../test-utils/testing-libraries-utils";

test("handles error for scoops and toppings route", async () => {
  server.resetHandlers(http.get("http://localhost:3030/scoops"), () => {
    return new HttpResponse(null, { status: 500 });
  });
  server.resetHandlers(http.get("http://localhost:3030/toppings"), () => {
    return new HttpResponse(null, { status: 500 });
  });

  render(<OrderEntry />);
  const alerts = await screen.findAllByRole("alert");

  expect(alerts).toHaveLength(2);
});
