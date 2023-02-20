import { initialize } from "@lib/index.js";
import { test, expect } from "vitest";

test("autocomplete constructor is mocked", () => {
  initialize();
  expect(new google.maps.places.Autocomplete(null)).toBeTruthy();
});
