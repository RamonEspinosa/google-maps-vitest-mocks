import { initialize } from "../../index.js";
import { expect, test } from "vitest";

test("data object is mocked", () => {
  initialize();
  expect(new google.maps.Data(null)).toBeTruthy();
  const map = new google.maps.Map(null);
  expect(map.data).toBeTruthy();
});
