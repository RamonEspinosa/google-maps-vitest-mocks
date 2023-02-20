import { MVCObject } from "../../maps/event/MVCObject.js";
import { vi } from "vitest";

export class Polyline extends MVCObject implements google.maps.Polyline {
  constructor(_opts?: google.maps.PolylineOptions | null) {
    super();
  }

  public getDraggable = vi.fn().mockImplementation((): boolean => false);
  public getEditable = vi.fn().mockImplementation((): boolean => false);
  public getMap = vi
    .fn()
    .mockImplementation((): google.maps.Map => ({} as google.maps.Map));
  public getPath = vi
    .fn()
    .mockImplementation(
      (): google.maps.MVCArray<google.maps.LatLng> =>
        ({} as google.maps.MVCArray<google.maps.LatLng>)
    );
  public getVisible = vi.fn().mockImplementation((): boolean => false);
  public setDraggable = vi
    .fn()
    .mockImplementation((_draggable: boolean): void => {});
  public setEditable = vi
    .fn()
    .mockImplementation((_editable: boolean): void => {});
  public setMap = vi
    .fn()
    .mockImplementation((_map: google.maps.Map): void => {});
  public setOptions = vi
    .fn()
    .mockImplementation((_options: google.maps.PolylineOptions): void => {});
  public setPath = vi
    .fn()
    .mockImplementation(
      (
        _path:
          | google.maps.MVCArray<google.maps.LatLng>
          | google.maps.LatLng[]
          | google.maps.LatLngLiteral[]
      ): void => {}
    );
  public setVisible = vi
    .fn()
    .mockImplementation((_visible: boolean): void => {});
}
