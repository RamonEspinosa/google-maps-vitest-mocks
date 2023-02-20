import { initialize } from "../../index.js";
import { test, expect } from "vitest";

test("circle constructor is mocked", () => {
  initialize();
  expect(new google.maps.Circle(null)).toBeTruthy();
});
