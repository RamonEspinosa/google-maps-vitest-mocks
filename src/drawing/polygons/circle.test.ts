import { initialize } from "@lib/index.js";
import { test, expect } from "vitest";

test("circle constructor is mocked", () => {
  initialize();
  expect(new google.maps.Circle(null)).toBeTruthy();
});
