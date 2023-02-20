/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi } from "vitest";

export class AutocompleteService
  implements google.maps.places.AutocompleteService
{
  public getPlacePredictions = vi
    .fn()
    .mockImplementation(
      (
        _request: any,
        _callback: (
          predictions: any,
          status: google.maps.places.PlacesServiceStatus
        ) => void
      ): void => {
        _callback([], google.maps.places.PlacesServiceStatus.OK);
      }
    );

  public getQueryPredictions = vi
    .fn()
    .mockImplementation(
      (
        _request: any,
        _callback: (
          predictions: any,
          status: google.maps.places.PlacesServiceStatus
        ) => void
      ): void => {
        _callback([], google.maps.places.PlacesServiceStatus.OK);
      }
    );
}
