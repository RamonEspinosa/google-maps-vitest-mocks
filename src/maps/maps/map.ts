import { vi } from "vitest";
import { LatLng, LatLngBounds } from "@lib/maps/coordinates/latlng.js";
import { MVCObject } from "@lib/maps/event/MVCObject.js";

export class Map extends MVCObject implements google.maps.Map {
  public controls: Array<google.maps.MVCArray<Node>>;
  public data: google.maps.Data;
  public mapTypes: google.maps.MapTypeRegistry;
  public overlayMapTypes: google.maps.MVCArray<google.maps.MapType>;

  constructor(_mapDiv: Element | null, _opts?: google.maps.MapOptions) {
    super();
    this.data = new google.maps.Data();
    this.controls = [
      new google.maps.MVCArray<Node>(), // BOTTOM_CENTER
      new google.maps.MVCArray<Node>(), // BOTTOM_LEFT
      new google.maps.MVCArray<Node>(), // BOTTOM_RIGHT
      new google.maps.MVCArray<Node>(), // LEFT_BOTTOM
      new google.maps.MVCArray<Node>(), // LEFT_CENTER
      new google.maps.MVCArray<Node>(), // LEFT_TOP
      new google.maps.MVCArray<Node>(), // RIGHT_BOTTOM
      new google.maps.MVCArray<Node>(), // RIGHT_CENTER
      new google.maps.MVCArray<Node>(), // RIGHT_TOP
      new google.maps.MVCArray<Node>(), // TOP_CENTER
      new google.maps.MVCArray<Node>(), // TOP_LEFT
      new google.maps.MVCArray<Node>(), // TOP_RIGHT
    ];
    this.mapTypes = new google.maps.MVCObject();
    this.overlayMapTypes = new google.maps.MVCArray();
  }
  public fitBounds = vi
    .fn()
    .mockImplementation(
      (
        _bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral,
        _padding?: number | google.maps.Padding
      ): void => {
        return null;
      }
    );
  public getBounds = vi.fn().mockImplementation(() => new LatLngBounds());
  public getCenter = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new LatLng({ lat: 0, lng: 0 })
    );
  public getClickableIcons = vi.fn().mockImplementation((): boolean => false);
  public getDiv = vi.fn().mockImplementation((): Element => {
    return vi.fn() as unknown as Element;
  });
  public getHeading = vi.fn().mockImplementation((): number => 0);
  public getMapTypeId = vi
    .fn()
    .mockImplementation(
      (): google.maps.MapTypeId => google.maps.MapTypeId.ROADMAP
    );
  public getProjection = vi
    .fn()
    .mockImplementation((): google.maps.Projection | null => vi.fn() as null);
  public getRenderingType = vi
    .fn()
    .mockImplementation(
      (): google.maps.RenderingType => google.maps.RenderingType.RASTER
    );
  public getStreetView = vi
    .fn()
    .mockImplementation(
      (): google.maps.StreetViewPanorama =>
        vi.fn() as unknown as google.maps.StreetViewPanorama
    );
  public getTilt = vi.fn().mockImplementation((): number => 0);
  public getZoom = vi.fn().mockImplementation((): number => 0);
  public moveCamera = vi
    .fn()
    .mockImplementation((_cameraOptions: google.maps.CameraOptions): void => {
      return null;
    });
  public panBy = vi.fn().mockImplementation((_x: number, _y: number): void => {
    return null;
  });
  public panTo = vi
    .fn()
    .mockImplementation(
      (_latLng: google.maps.LatLng | google.maps.LatLngLiteral): void => {
        return null;
      }
    );
  public panToBounds = vi
    .fn()
    .mockImplementation(
      (
        _latLngBounds:
          | google.maps.LatLngBounds
          | google.maps.LatLngBoundsLiteral,
        _padding?: number | google.maps.Padding
      ): void => {
        return null;
      }
    );
  public setCenter = vi
    .fn()
    .mockImplementation(
      (_latlng: google.maps.LatLng | google.maps.LatLngLiteral): void => {
        return null;
      }
    );
  public setHeading = vi.fn().mockImplementation((_heading: number): void => {
    return null;
  });
  public setMapTypeId = vi
    .fn()
    .mockImplementation((_mapTypeId: google.maps.MapTypeId | string): void => {
      return null;
    });
  public setOptions = vi
    .fn()
    .mockImplementation((_options: google.maps.MapOptions): void => {
      return null;
    });
  public setStreetView = vi
    .fn()
    .mockImplementation((_panorama: google.maps.StreetViewPanorama): void => {
      return null;
    });
  public setTilt = vi.fn().mockImplementation((_tilt: number): void => {
    return null;
  });
  public setZoom = vi.fn().mockImplementation((_zoom: number): void => {
    return null;
  });
  public setClickableIcons = vi
    .fn()
    .mockImplementation((_clickable: boolean): void => {
      return null;
    });
}
