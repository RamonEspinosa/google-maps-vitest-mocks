import {
  initialize,
  ControlPosition,
  Map,
  mockInstances,
} from "../../index.js";
import { test, expect, beforeEach } from "vitest";

beforeEach(() => {
  initialize();
  mockInstances.clearAll();
});

test("can initialize", () => {
  expect(new google.maps.Map(null)).toBeTruthy();
});

test("controls initialized", () => {
  const map = new google.maps.Map(null);
  expect(map.controls[ControlPosition.BOTTOM_CENTER]).toBeTruthy();
});

test("mockInstances available", () => {
  new google.maps.MVCObject();
  const map = new google.maps.Map(null);
  expect(Map.mockInstances).toMatchObject([map]);
});

test("registers mocks", () => {
  const map = new google.maps.Map(null);
  expect(Map.mockInstances).toMatchObject([map]);
  map.fitBounds(null);
  map.data.get(null);
  expect(mockInstances.get(Map)).toHaveLength(1);
  expect(mockInstances.get(Map)[0].fitBounds).toHaveBeenCalledWith(null);
  expect(mockInstances.get(Map)[0].data.get).toHaveBeenCalledWith(null);
});
