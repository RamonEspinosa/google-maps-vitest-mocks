import { initialize } from "@lib/index.js";
import { test, expect, beforeEach } from "vitest";

beforeEach(() => {
  initialize();
});

test("polygon constructor is mocked", () => {
  expect(new google.maps.Polygon(null)).toBeTruthy();
});

test("getDraggable returns false", () => {
  expect(new google.maps.Polygon(null).getDraggable()).toBe(false);
});

test("getEditable returns false", () => {
  expect(new google.maps.Polygon(null).getEditable()).toBe(false);
});

test("getMap returns {}", () => {
  expect(new google.maps.Polygon(null).getMap()).toEqual({});
});

test("getPath returns {}", () => {
  expect(new google.maps.Polygon(null).getPath()).toEqual({});
});

test("getPaths returns {}", () => {
  expect(new google.maps.Polygon(null).getPaths()).toEqual({});
});

test("getVisible returns false", () => {
  expect(new google.maps.Polygon(null).getVisible()).toEqual(false);
});

test("setDraggable is mocked", () => {
  new google.maps.Polygon(null).setDraggable(true);
});

test("setEditable is mocked", () => {
  new google.maps.Polygon(null).setEditable(true);
});

test("setMap is mocked", () => {
  new google.maps.Polygon(null).setMap({} as google.maps.Map);
});

test("setOptions is mocked", () => {
  new google.maps.Polygon(null).setOptions({});
});

test("setPath is mocked", () => {
  new google.maps.Polygon(null).setPath([]);
});

test("setPaths is mocked", () => {
  new google.maps.Polygon(null).setPaths([]);
});

test("setVisible is mocked", () => {
  new google.maps.Polygon(null).setVisible(true);
});
