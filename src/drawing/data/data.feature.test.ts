import { test, expect } from "vitest";
import { initialize } from "@lib/initialize.js";

test("feature object is mocked", () => {
  initialize();
  expect(new global.google.maps.Data.Feature(null)).toBeTruthy();
});
