import { ControlPosition } from "../../maps/controls/ControlPosition.js";
import { MVCObject } from "../../maps/event/MVCObject.js";
import { Feature } from "../../drawing/data/data.feature.js";
import { vi } from "vitest";

export class Data extends MVCObject implements google.maps.Data {
  constructor(_opt?: google.maps.Data.DataOptions | null) {
    super();
  }
  public static Feature = vi
    .fn()
    .mockImplementation(
      (
        options?: google.maps.Data.FeatureOptions | null
      ): google.maps.Data.Feature => new Feature(options)
    );
  public add = vi
    .fn()
    .mockImplementation(
      (
        _feature?:
          | google.maps.Data.Feature
          | null
          | google.maps.Data.FeatureOptions
      ): google.maps.Data.Feature => {
        return null;
      }
    );
  public addGeoJson = vi
    .fn()
    .mockImplementation(
      (
        _geoJson: object,
        _options?: google.maps.Data.GeoJsonOptions | null
      ): google.maps.Data.Feature[] => {
        return [];
      }
    );
  public contains = vi
    .fn()
    .mockImplementation((_feature: google.maps.Data.Feature): boolean => {
      return false;
    });
  public forEach = vi
    .fn()
    .mockImplementation(
      (_callback: (a: google.maps.Data.Feature) => void): void => {
        return null;
      }
    );
  public getControlPosition = vi
    .fn()
    .mockImplementation((): google.maps.ControlPosition => {
      return ControlPosition.BOTTOM_CENTER;
    });
  public getControls = vi.fn().mockImplementation((): string[] | null => {
    return null;
  });
  public getDrawingMode = vi.fn().mockImplementation((): string[] | null => {
    return null;
  });
  public getFeatureById = vi
    .fn()
    .mockImplementation(
      (_id: number | string): google.maps.Data.Feature | undefined => {
        return undefined;
      }
    );
  public getMap = vi.fn().mockImplementation((): google.maps.Map | null => {
    return null;
  });
  public getStyle = vi
    .fn()
    .mockImplementation(
      ():
        | google.maps.Data.StylingFunction
        | google.maps.Data.StyleOptions
        | null => {
        return null;
      }
    );
  public loadGeoJson = vi
    .fn()
    .mockImplementation(
      (
        _url: string,
        _options?: google.maps.Data.GeoJsonOptions | null,
        _callback?: (a: google.maps.Data.Feature[]) => void
      ): void => {
        return null;
      }
    );
  public overrideStyle = vi
    .fn()
    .mockImplementation(
      (
        _feature: google.maps.Data.Feature,
        _style: google.maps.Data.StyleOptions
      ): void => {
        return null;
      }
    );
  public remove = vi
    .fn()
    .mockImplementation((_feature: google.maps.Data.Feature): void => {
      return null;
    });
  public revertStyle = vi
    .fn()
    .mockImplementation((_feature?: google.maps.Data.Feature | null): void => {
      return null;
    });
  public setControlPosition = vi
    .fn()
    .mockImplementation(
      (_controlPosition: google.maps.ControlPosition): void => {
        return null;
      }
    );
  public setControls = vi
    .fn()
    .mockImplementation((_controls: string[] | null): void => {
      return null;
    });
  public setDrawingMode = vi
    .fn()
    .mockImplementation((_drawingMode: string | null): void => {
      return null;
    });
  public setMap = vi
    .fn()
    .mockImplementation((_map: google.maps.Map | null): void => {
      return null;
    });
  public setStyle = vi
    .fn()
    .mockImplementation(
      (
        _style:
          | google.maps.Data.StylingFunction
          | google.maps.Data.StyleOptions
          | null
      ): void => {
        return null;
      }
    );
  public toGeoJson = vi
    .fn()
    .mockImplementation((_callback: (a: object) => void): void => {
      return null;
    });
  /** @todo: Add mocks for these static classes */
  static DataOptions = class {};
  static FeatureOptions = class {};
  static GeoJsonOptions = class {};
  static Geometry = class {};
  static StyleOptions = class {};
  static StylingFunction = class {};
}
