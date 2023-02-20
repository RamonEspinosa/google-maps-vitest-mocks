import { MVCArray } from "../../maps/event/MVCArray.js";
import { MVCObject } from "../../maps/event/MVCObject.js";
import { LatLng } from "../../maps/coordinates/latlng.js";
import { vi } from "vitest";

export class StreetViewPanorama
  extends MVCObject
  implements google.maps.StreetViewPanorama
{
  public controls: MVCArray<HTMLElement>[] = [];
  public getLinks = vi
    .fn()
    .mockImplementation(
      (): (google.maps.StreetViewLink | null)[] | null => null
    );
  public getLocation = vi
    .fn()
    .mockImplementation((): google.maps.StreetViewLocation | null => ({
      description: null,
      latLng: new LatLng(1, 1),
      pano: "pano",
      shortDescription: null,
    }));
  public getMotionTracking = vi.fn().mockImplementation((): boolean => false);
  public getPano = vi.fn().mockImplementation((): string => "pano");
  public getPhotographerPov = vi
    .fn()
    .mockImplementation(
      (): google.maps.StreetViewPov => ({ heading: 0, pitch: 0 })
    );
  public getPosition = vi
    .fn()
    .mockImplementation((): google.maps.LatLng | null => new LatLng(1, 1));
  public getPov = vi
    .fn()
    .mockImplementation(
      (): google.maps.StreetViewPov => ({ heading: 0, pitch: 0 })
    );
  public getStatus = vi
    .fn()
    .mockImplementation(
      (): google.maps.StreetViewStatus => google.maps.StreetViewStatus.OK
    );
  public getVisible = vi.fn().mockImplementation((): boolean => true);
  public getZoom = vi.fn().mockImplementation((): number => 0);
  public registerPanoProvider = vi
    .fn()
    .mockImplementation(
      (
        _provider: (a: string) => google.maps.StreetViewPanoramaData | null,
        _opt_options?: google.maps.PanoProviderOptions
      ): void => null
    );
  public setLinks = vi
    .fn()
    .mockImplementation(
      (_inks: (google.maps.StreetViewLink | null)[] | null): void => null
    );
  public setMotionTracking = vi
    .fn()
    .mockImplementation((_motionTracking: boolean): void => null);
  public setOptions = vi
    .fn()
    .mockImplementation(
      (_options: google.maps.StreetViewPanoramaOptions | null): void => null
    );
  public setPano = vi.fn().mockImplementation((_pano: string): void => null);
  public setPosition = vi
    .fn()
    .mockImplementation(
      (_latLng: google.maps.LatLng | null | google.maps.LatLngLiteral): void =>
        null
    );
  public setPov = vi
    .fn()
    .mockImplementation((_pov: google.maps.StreetViewPov): void => null);
  public setVisible = vi
    .fn()
    .mockImplementation((_flag: boolean): void => null);
  public setZoom = vi.fn().mockImplementation((_zoom: number): void => null);
}
