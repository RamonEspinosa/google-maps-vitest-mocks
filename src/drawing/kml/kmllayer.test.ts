import { KmlLayer, initialize } from "@lib/index.js";
import { test, expect } from "vitest";

test("can initialize", () => {
  initialize();
  expect(new google.maps.KmlLayer()).toBeTruthy();
});

test("mockInstances available", () => {
  initialize();
  const kmllayer = new google.maps.KmlLayer();
  expect(KmlLayer.mockInstances).toMatchObject([kmllayer]);
});
