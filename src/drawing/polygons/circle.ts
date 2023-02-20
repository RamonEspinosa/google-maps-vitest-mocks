import { LatLng } from "@lib/maps/coordinates/latlng.js";
import { MVCObject } from "@lib/maps/event/MVCObject.js";
import { Map } from "@lib/maps/maps/map.js";
import { vi } from "vitest";

export class Circle extends MVCObject implements google.maps.Circle {
  constructor(_opt?: google.maps.CircleOptions) {
    super();
  }
  public getBounds = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLngBounds | null | undefined => null
    );
  public getCenter = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new LatLng({ lat: 0, lng: 0 })
    );
  public getDraggable = vi.fn().mockImplementation((): boolean => true);
  public getEditable = vi.fn().mockImplementation((): boolean => true);
  public getMap = vi
    .fn()
    .mockImplementation((): google.maps.Map => new Map(null));
  public getRadius = vi.fn().mockImplementation((): number => 0);
  public getVisible = vi.fn().mockImplementation((): boolean => true);
  public setCenter = vi
    .fn()
    .mockImplementation(
      (_center: google.maps.LatLng | google.maps.LatLngLiteral) => {}
    );
  public setDraggable = vi.fn().mockImplementation((_draggable: boolean) => {});
  public setEditable = vi.fn().mockImplementation((_editable: boolean) => {});
  public setMap = vi.fn().mockImplementation((_map: google.maps.Map) => {});
  public setOptions = vi
    .fn()
    .mockImplementation((_options: google.maps.CircleOptions) => {});
  public setRadius = vi.fn().mockImplementation((_radius: number) => {});
  public setVisible = vi.fn().mockImplementation((_visible: boolean) => {});
}
