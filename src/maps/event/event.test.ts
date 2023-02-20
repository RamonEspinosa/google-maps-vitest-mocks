import { initialize, event } from "../../index.js";
import { test, expect } from "vitest";

test("event system", () => {
  initialize();
  expect(google.maps.event).toStrictEqual(event);
});
