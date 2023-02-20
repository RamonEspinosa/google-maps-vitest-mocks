import { vi } from "vitest";

export class LatLng implements google.maps.LatLng {
  constructor(
    _a: google.maps.LatLngLiteral | number,
    _b?: boolean | number,
    _c?: boolean
  ) {}

  public equals = vi
    .fn()
    .mockImplementation((_other: google.maps.LatLng): boolean => false);
  public lat = vi.fn().mockImplementation((): number => 0);
  public lng = vi.fn().mockImplementation((): number => 0);
  public toString = vi.fn().mockImplementation((): string => "");
  public toUrlValue = vi
    .fn()
    .mockImplementation((_precision?: number): string => "");
  public toJSON = vi.fn().mockImplementation((): google.maps.LatLngLiteral => {
    return { lat: 0, lng: 0 };
  });
}

export class LatLngBounds implements google.maps.LatLngBounds {
  constructor(
    _sw?: google.maps.LatLng | google.maps.LatLngLiteral,
    _ne?: google.maps.LatLng | google.maps.LatLngLiteral
  ) {}
  public contains = vi
    .fn()
    .mockImplementation(
      (_latLng: google.maps.LatLng | google.maps.LatLngLiteral): boolean =>
        false
    );
  public equals = vi
    .fn()
    .mockImplementation(
      (
        _other: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
      ): boolean => false
    );
  public extend = vi
    .fn()
    .mockImplementation(
      (
        _point: google.maps.LatLng | google.maps.LatLngLiteral
      ): google.maps.LatLngBounds => this
    );
  public getCenter = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new google.maps.LatLng({ lat: 0, lng: 0 })
    );
  public getNorthEast = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new google.maps.LatLng({ lat: 0, lng: 0 })
    );
  public getSouthWest = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new google.maps.LatLng({ lat: 0, lng: 0 })
    );
  public intersects = vi
    .fn()
    .mockImplementation(
      (
        _other: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
      ): boolean => false
    );
  public isEmpty = vi.fn().mockImplementation((): boolean => false);
  public toJSON = vi
    .fn()
    .mockImplementation((): google.maps.LatLngBoundsLiteral => {
      return { east: 0, north: 0, south: 0, west: 0 };
    });
  public toSpan = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new google.maps.LatLng({ lat: 0, lng: 0 })
    );
  public toString = vi.fn().mockImplementation((): string => "");
  public toUrlValue = vi
    .fn()
    .mockImplementation((_precision?: number): string => "");
  public union = vi
    .fn()
    .mockImplementation(
      (
        _other: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
      ): google.maps.LatLngBounds => this
    );
}
