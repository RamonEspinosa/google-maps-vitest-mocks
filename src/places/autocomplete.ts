import { MVCObject } from "@lib/maps/event/MVCObject.js";
import { vi } from "vitest";

export class Autocomplete
  extends MVCObject
  implements google.maps.places.Autocomplete
{
  constructor(
    _inputField: HTMLInputElement,
    _opts?: google.maps.places.AutocompleteOptions
  ) {
    super();
  }
  public getBounds = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLngBounds | null | undefined => null
    );
  public getFields = vi.fn().mockImplementation((): string[] => []);
  public getPlace = vi
    .fn()
    .mockImplementation(
      (): google.maps.places.PlaceResult =>
        ({ name: "" } as google.maps.places.PlaceResult)
    );
  public setBounds = vi
    .fn()
    .mockImplementation(
      (
        _bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
      ): void => {}
    );
  public setComponentRestrictions = vi
    .fn()
    .mockImplementation(
      (_restrictions: google.maps.places.ComponentRestrictions): void => {}
    );
  public setFields = vi
    .fn()
    .mockImplementation((_fields: string[]): void => {});
  public setOptions = vi
    .fn()
    .mockImplementation(
      (_options: google.maps.places.AutocompleteOptions): void => {}
    );
  public setTypes = vi.fn().mockImplementation((_types: string[]): void => {});
}
