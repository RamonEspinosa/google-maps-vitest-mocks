import { initialize, InfoWindow } from "../../index.js";
import { test, expect } from "vitest";

test("can initialize", () => {
  initialize();
  expect(new google.maps.InfoWindow()).toBeTruthy();
});

test("mockInstances available", () => {
  initialize();
  const infowindow = new google.maps.InfoWindow();
  expect(InfoWindow.mockInstances).toMatchObject([infowindow]);
});
