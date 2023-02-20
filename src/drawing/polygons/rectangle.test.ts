import { initialize, Map } from "@lib/index.js";
import { test, expect, beforeEach } from "vitest";

beforeEach(() => {
  initialize();
});

test("Rectangle constructor is mocked", () => {
  expect(new google.maps.Rectangle(null)).toBeTruthy();
});

test("getBounds returns null", () => {
  expect(new google.maps.Rectangle(null).getBounds()).toBeNull();
});

test("getDraggable returns true", () => {
  expect(new google.maps.Rectangle(null).getDraggable()).toBe(true);
});

test("getEditable returns true", () => {
  expect(new google.maps.Rectangle(null).getEditable()).toBe(true);
});

test("getMap returns map", () => {
  expect(new google.maps.Rectangle(null).getMap()).toBeInstanceOf(Map);
});

test("getVisible returns true", () => {
  expect(new google.maps.Rectangle(null).getVisible()).toBe(true);
});

test("setBounds is mocked", () => {
  const rect = new google.maps.Rectangle(null);
  const bounds = { north: 1, east: 2, west: 3, south: 4 };
  rect.setBounds(bounds);
  expect(rect.setBounds).toHaveBeenCalledWith(bounds);
});

test("setDraggable is mocked", () => {
  const rect = new google.maps.Rectangle(null);
  rect.setDraggable(false);
  expect(rect.setDraggable).toHaveBeenCalledWith(false);
});

test("setEditable is mocked", () => {
  const rect = new google.maps.Rectangle(null);
  rect.setEditable(false);
  expect(rect.setEditable).toHaveBeenCalledWith(false);
});

test("setMap is mocked", () => {
  const rect = new google.maps.Rectangle(null);
  const myMap = {} as any;
  rect.setMap(myMap);
  expect(rect.setMap).toHaveBeenCalledWith({});
});

test("setOptions is mocked", () => {
  const rect = new google.maps.Rectangle(null);
  rect.setOptions({ editable: true });
  expect(rect.setOptions).toHaveBeenCalledWith({ editable: true });
});

test("setVisible is mocked", () => {
  const rect = new google.maps.Rectangle(null);
  rect.setVisible(false);
  expect(rect.setVisible).toHaveBeenCalledWith(false);
});
