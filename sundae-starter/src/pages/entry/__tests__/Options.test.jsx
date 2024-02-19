import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("is displaying image for each scoop option from the server", async () => {
  render(<Options optionType="scoops" />);

  // $ in the regex indicates that scoop is at the end of the string
  const scoopImages = await screen.findAllByAltText(/scoop$/i);
  expect(scoopImages).toHaveLength(2);
});
