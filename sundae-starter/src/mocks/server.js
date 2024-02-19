import { setupServer } from "msw/node";
import { scoopHandlers, toppingsHandler } from "./handlers";

export const server = setupServer(...scoopHandlers, ...toppingsHandler);
