import { initialize, StreetViewService, mockInstances } from "@lib/index.js";
import { test, expect, beforeEach } from "vitest";

beforeEach(() => {
  initialize();
  mockInstances.clearAll();
});

test("street view service is mocked", async () => {
  const service = new google.maps.StreetViewService();
  expect(await service.getPanorama(null)).toBeTruthy();
});

test("registers mocks", () => {
  const service = new google.maps.StreetViewService();
  service.getPanorama(null);
  const mocks = mockInstances.get(StreetViewService);
  expect(mocks).toHaveLength(1);
  expect(
    mockInstances.get(StreetViewService)[0].getPanorama
  ).toHaveBeenCalledWith(null);
});
