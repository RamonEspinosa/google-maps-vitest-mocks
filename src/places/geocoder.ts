/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi } from "vitest";

export class Geocoder implements google.maps.places.Geocoder {
  public geocode = vi
    .fn()
    .mockImplementation(
      (_request: any, callback?: (result, status) => void) => {
        callback?.([], google.maps.GeocoderStatus.OK);
        return [];
      }
    );
}
