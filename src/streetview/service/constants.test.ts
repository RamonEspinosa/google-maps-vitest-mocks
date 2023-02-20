import { initialize } from "@lib/index.js";
import { test, expect } from "vitest";

test("street view constants", () => {
  initialize();
  expect(google.maps.StreetViewPreference).toMatchObject({
    BEST: "best",
    NEAREST: "nearest",
  });
  expect(google.maps.StreetViewSource).toMatchObject({
    DEFAULT: "default",
    OUTDOOR: "outdoor",
  });
  expect(google.maps.StreetViewStatus).toMatchObject({
    OK: "OK",
    UNKNOWN_ERROR: "UNKNOWN_ERROR",
    ZERO_RESULTS: "ZERO_RESULTS",
  });
});
