import { initialize, event } from "@lib/index.js";
import { test, expect } from "vitest";

test("event system", () => {
  initialize();
  expect(google.maps.event).toStrictEqual(event);
});
