import "@testing-library/jest-dom";

import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server";

// Start API mocking
beforeAll(() => server.listen());

// Reset handlers in between tests.
afterEach(() => server.resetHandlers());

// Shuts down the server at the end
afterAll(() => server.close());
