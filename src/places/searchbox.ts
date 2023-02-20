import { MVCObject } from "@lib/maps/event/MVCObject.js";
import { vi } from "vitest";

export class SearchBox
  extends MVCObject
  implements google.maps.places.SearchBox
{
  public getBounds = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLngBounds | null | undefined => null
    );
  public getPlaces = vi
    .fn()
    .mockImplementation((): google.maps.places.PlaceResult[] => [
      { name: "" } as google.maps.places.PlaceResult,
    ]);
  public setBounds = vi
    .fn()
    .mockImplementation(
      (
        _bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
      ): void => null
    );
}
