import { MVCObject } from "../../maps/event/MVCObject.js";
import { vi } from "vitest";

export class Polygon extends MVCObject implements google.maps.Polygon {
  constructor(_opts?: google.maps.PolygonOptions | null) {
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
  public getPaths = vi
    .fn()
    .mockImplementation(
      (): google.maps.MVCArray<google.maps.MVCArray<google.maps.LatLng>> =>
        ({} as google.maps.MVCArray<google.maps.MVCArray<google.maps.LatLng>>)
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
    .mockImplementation((_options: google.maps.PolygonOptions): void => {});
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
  public setPaths = vi
    .fn()
    .mockImplementation(
      (
        _paths:
          | google.maps.MVCArray<google.maps.MVCArray<google.maps.LatLng>>
          | google.maps.MVCArray<google.maps.LatLng>
          | google.maps.LatLng[][]
          | google.maps.LatLngLiteral[][]
          | google.maps.LatLng[]
          | google.maps.LatLngLiteral[]
      ): void => {}
    );
  public setVisible = vi
    .fn()
    .mockImplementation((_visible: boolean): void => {});
}
