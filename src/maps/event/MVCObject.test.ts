import { initialize, MVCObject, Map } from "@lib/index.js";
import { test, expect } from "vitest";

test("instances are stored", () => {
  const mvcObject = new MVCObject();
  expect(MVCObject.mockInstances).toStrictEqual([mvcObject]);
  expect(MVCObject.mockInstances[0].addListener).toBeTruthy();
  expect(mvcObject.addListener()).toBeTruthy();
});

test("setup child class", () => {
  initialize();
  new google.maps.Map(null);
  expect(Map.mockInstances).toBeTruthy();
});

test("auto cleanup after each test from above", () => {
  expect(MVCObject.mockInstances).toBeUndefined();
  expect(Map.mockInstances).toBeUndefined();
  expect(MVCObject._mockClasses).toBeUndefined();
});
