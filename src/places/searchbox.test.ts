import { initialize } from "../index.js";
import { test, expect } from "vitest";

test("searchbox constructor is mocked", () => {
  initialize();
  expect(new google.maps.places.SearchBox(null)).toBeTruthy();
});
