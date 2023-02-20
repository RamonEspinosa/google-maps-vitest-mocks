import { LatLng } from "../../maps/coordinates/latlng.js";
import { Point } from "../../maps/coordinates/point.js";
import { MVCObject } from "../../maps/event/MVCObject.js";
import { VisibleRegion } from "../../maps/maps/visibleregion.js";
import { vi } from "vitest";

export class MapCanvasProjection
  extends MVCObject
  implements google.maps.MapCanvasProjection
{
  public fromContainerPixelToLatLng = vi
    .fn()
    .mockImplementation(
      (
        _pixel: google.maps.Point | null,
        _nowrap?: boolean
      ): google.maps.LatLng | null => new LatLng(0, 0)
    );
  public fromDivPixelToLatLng = vi
    .fn()
    .mockImplementation(
      (
        _pixel: google.maps.Point | null,
        _nowrap?: boolean
      ): google.maps.LatLng | null => new LatLng(0, 0)
    );
  public fromLatLngToContainerPixel = vi
    .fn()
    .mockImplementation(
      (_latLng: google.maps.LatLng | null): google.maps.Point | null =>
        new Point(0, 0)
    );
  public fromLatLngToDivPixel = vi
    .fn()
    .mockImplementation(
      (_latLng: google.maps.LatLng | null): google.maps.Point => new Point(0, 0)
    );
  public getVisibleRegion = vi
    .fn()
    .mockImplementation(
      (): google.maps.VisibleRegion | null => new VisibleRegion()
    );
  public getWorldWidth = vi.fn().mockImplementation((): number => 0);
}
