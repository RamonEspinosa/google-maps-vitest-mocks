import { initialize } from "../../index.js";
import { test, expect } from "vitest";

test("street view coverage layer is mocked", () => {
  initialize();
  expect(new google.maps.StreetViewCoverageLayer()).toBeTruthy();
});
