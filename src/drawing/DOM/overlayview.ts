import { MapCanvasProjection } from "../../drawing/DOM/mapcanvasprojection.js";
import { MapPanes } from "../../drawing/DOM/mappanes.js";
import { Map } from "../../maps/maps/map.js";
import { MVCObject } from "../../maps/event/MVCObject.js";
import { vi } from "vitest";

export class OverlayView extends MVCObject implements google.maps.OverlayView {
  public draw = vi.fn();
  public getMap = vi
    .fn()
    .mockImplementation(
      (): google.maps.Map | null | google.maps.StreetViewPanorama =>
        new Map(null, {})
    );
  public getPanes = vi
    .fn()
    .mockImplementation((): google.maps.MapPanes | null => new MapPanes());
  public getProjection = vi
    .fn()
    .mockImplementation(
      (): google.maps.MapCanvasProjection => new MapCanvasProjection()
    );
  public onAdd = vi.fn();
  public onRemove = vi.fn();
  public setMap = vi
    .fn()
    .mockImplementation(
      (_map: google.maps.Map | null | google.maps.StreetViewPanorama): void =>
        null
    );
}
