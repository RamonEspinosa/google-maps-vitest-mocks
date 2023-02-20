import { test, expect } from "vitest";
import { initialize } from "@lib/index.js";

test("feature object is mocked", () => {
  initialize();
  expect(new global.google.maps.Data.Feature(null)).toBeTruthy();
});
