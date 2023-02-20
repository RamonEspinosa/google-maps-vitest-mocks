import { MVCObject } from "../../maps/event/MVCObject.js";
import { Map } from "../../maps/maps/map.js";
import { vi } from "vitest";

export class Rectangle extends MVCObject implements google.maps.Rectangle {
  constructor(_opt?: google.maps.RectangleOptions) {
    super();
  }
  public getBounds = vi.fn(() => null);
  public getDraggable = vi.fn(() => true);
  public getEditable = vi.fn(() => true);
  public getMap = vi.fn(() => new Map(null));
  public getVisible = vi.fn(() => true);
  public setBounds = vi.fn(
    (_bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral) => {}
  );
  public setDraggable = vi.fn((_draggable: boolean) => {});
  public setEditable = vi.fn((_editable: boolean) => {});
  public setMap = vi.fn((_map: google.maps.Map | null) => {});
  public setOptions = vi.fn(
    (_options: google.maps.RectangleOptions | null) => {}
  );
  public setVisible = vi.fn((_visible: boolean) => {});
}
