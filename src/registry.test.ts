import { beforeEach, expect, test } from "vitest";
import { initialize } from "@lib/index.js";
import { mockInstances, MOCKS_REGISTRY } from "@lib/registry.js";

beforeEach(() => {
  initialize();
});

test.skip("mocks registry", () => {
  expect(MOCKS_REGISTRY.size).toBe(0);
  const mvc1 = new global.google.maps.MVCObject();
  const mvc2 = new global.google.maps.MVCObject();
  expect(MOCKS_REGISTRY.size).toBe(1);
  expect(mockInstances.get(MVCObject)).toStrictEqual([mvc1, mvc2]);
  const map = new global.google.maps.Map(null);
  mockInstances.clear(MVCObject);
  expect(mockInstances.get(MVCObject)).toStrictEqual([]);
  expect(mockInstances.get(Map)).toStrictEqual([map]);
  mockInstances.clearAll();
  expect(MOCKS_REGISTRY.size).toBe(0);
});

test.skip("Readme example 1", () => {
  const map = new global.google.maps.Map(null);
  const markerOne = new global.google.maps.Marker();
  const markerTwo = new global.google.maps.Marker();

  map.setHeading(8);
  markerOne.setMap(map);
  markerTwo.setLabel("My marker");

  const mapMocks = mockInstances.get(Map);
  const markerMocks = mockInstances.get(Marker);

  expect(mapMocks).toHaveLength(1);
  expect(markerMocks).toHaveLength(2);
  expect(mapMocks[0].setHeading).toHaveBeenCalledWith(8);
  expect(markerMocks[0].setMap).toHaveBeenCalledTimes(1);
  expect(markerMocks[1].setLabel).toHaveBeenCalledWith("My marker");
});
