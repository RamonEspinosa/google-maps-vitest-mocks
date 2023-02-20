import { LatLng } from "../../maps/coordinates/latlng.js";
import { MVCObject } from "../../maps/event/MVCObject.js";
import { vi } from "vitest";

export class InfoWindow extends MVCObject implements google.maps.InfoWindow {
  public close = vi.fn().mockImplementation((): void => null);
  public focus = vi.fn();
  public getContent = vi
    .fn()
    .mockImplementation((): string | Element | null | Text | undefined => {
      return vi.fn() as unknown as Element;
    });
  public getPosition = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLng | null | undefined =>
        new LatLng({ lat: 0, lng: 0 })
    );
  public getZIndex = vi
    .fn()
    .mockImplementation((): number | null | undefined => 1);
  public open = vi
    .fn()
    .mockImplementation(
      (
        _options?:
          | google.maps.InfoWindowOpenOptions
          | google.maps.Map
          | google.maps.StreetViewPanorama,
        _anchor?: google.maps.MVCObject
      ): void => null
    );
  public setContent = vi
    .fn()
    .mockImplementation((_content?: string | Element | Text): void => null);
  public setOptions = vi
    .fn()
    .mockImplementation(
      (_options?: google.maps.InfoWindowOptions): void => null
    );
  public setPosition = vi
    .fn()
    .mockImplementation(
      (_position?: google.maps.LatLng | google.maps.LatLngLiteral): void => null
    );
  public setZIndex = vi
    .fn()
    .mockImplementation((_zIndex?: number): void => null);
  constructor(_opts?: google.maps.InfoWindowOptions) {
    super();
  }
}
