import { LatLngBounds } from "../../maps/coordinates/latlng.js";
import { MapsEventListener } from "../../maps/event/event.js";
import { MVCObject } from "../../maps/event/MVCObject.js";
import { vi } from "vitest";

export class KmlLayer extends MVCObject implements google.maps.KmlLayer {
  public getDefaultViewport = vi
    .fn()
    .mockImplementation((): LatLngBounds | null => null);
  public getMap = vi
    .fn()
    .mockImplementation(
      (): google.maps.Map | google.maps.StreetViewPanorama | null | undefined =>
        null
    );
  public getMetadata = vi
    .fn()
    .mockImplementation((): google.maps.KmlLayerMetadata | null => null);
  public getStatus = vi
    .fn()
    .mockImplementation((): google.maps.KmlLayerStatus | null => null);
  public getUrl = vi
    .fn()
    .mockImplementation((): string | null | undefined => null);
  public getZIndex = vi
    .fn()
    .mockImplementation((): number | null | undefined => null);
  public setMap = vi
    .fn()
    .mockImplementation((_map: google.maps.Map | null): void => {
      return;
    });
  public setOptions = vi
    .fn()
    .mockImplementation((_options: google.maps.KmlLayerOptions): void => {
      return;
    });
  public setUrl = vi.fn().mockImplementation((_url: string): void => {
    return;
  });
  public setZIndex = vi.fn().mockImplementation((_zIndex: number): void => {
    return;
  });
  public addListener = vi
    .fn()
    .mockImplementation(
      (
        _eventName: string,
        _handler: (this: KmlLayer, event: MouseEvent) => void
      ): google.maps.MapsEventListener => MapsEventListener
    );
  constructor(_opts?: google.maps.KmlLayerOptions | null) {
    super();
  }
}
