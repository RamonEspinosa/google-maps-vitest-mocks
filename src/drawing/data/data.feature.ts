import { vi } from "vitest";

export class Feature implements google.maps.Data.Feature {
  constructor(_options?: google.maps.Data.FeatureOptions | null) {}
  public forEachProperty = vi
    .fn()
    .mockImplementation((_callback: (a: any, b: string) => void) => {
      return null;
    });
  public getGeometry = vi
    .fn()
    .mockImplementation((): google.maps.Data.Geometry | null => {
      return null;
    });
  public getId = vi.fn().mockImplementation((): number | string | undefined => {
    return "1";
  });
  public getProperty = vi.fn().mockImplementation((_name: string): any => {
    return undefined;
  });
  public removeProperty = vi.fn().mockImplementation((_name: string): void => {
    return null;
  });
  public setGeometry = vi
    .fn()
    .mockImplementation(
      (
        _newGeometry:
          | google.maps.Data.Geometry
          | null
          | google.maps.LatLng
          | google.maps.LatLngLiteral
      ): void => {
        return null;
      }
    );
  public setProperty = vi
    .fn()
    .mockImplementation((_name: string, _newValue: any): void => {
      return null;
    });
  public toGeoJson = vi
    .fn()
    .mockImplementation((_callback: (a: object) => void): void => {
      return null;
    });
}
