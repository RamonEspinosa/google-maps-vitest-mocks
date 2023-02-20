import { initialize } from "@lib/index.js";
import { test, expect } from "vitest";

test("street view panorama is mocked", () => {
  initialize();
  expect(new google.maps.StreetViewPanorama(null)).toBeTruthy();
});
