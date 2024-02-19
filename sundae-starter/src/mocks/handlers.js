import { http, HttpResponse } from "msw";

export const scoopHandlers = [
  http.get("http://localhost:3030/scoops", () =>
    HttpResponse.json([
      { name: "Chocolate", imagePath: "/images/chocolates" },
      { name: "Vanilla", imagePath: "/images/vanilla" },
    ])
  ),
];

export const toppingsHandler = [
  http.get("http://localhost:3030/toppings", () =>
    HttpResponse.json([
      { name: "M&Ms", imagePath: "/images/m-and-ms.png" },
      { name: "Hot fudge", imagePath: "/images/hot-fudge.png" },
    ])
  ),
];
