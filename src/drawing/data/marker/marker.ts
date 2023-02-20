import { LatLng } from "../../../maps/coordinates/latlng.js";
import { MapsEventListener } from "../../../maps/event/event.js";
import { MVCObject } from "../../../maps/event/MVCObject.js";
import { vi } from "vitest";

export class Marker extends MVCObject implements google.maps.Marker {
  static readonly MAX_ZINDEX: number;
  constructor(_opts?: google.maps.MarkerOptions | null) {
    super();
  }
  public getAnimation = vi
    .fn()
    .mockImplementation((): Animation | null | undefined => null);
  public getClickable = vi.fn().mockImplementation((): boolean => null);
  public getCursor = vi
    .fn()
    .mockImplementation((): string | null | undefined => null);
  public getDraggable = vi
    .fn()
    .mockImplementation((): boolean | null | undefined => null);
  public getIcon = vi
    .fn()
    .mockImplementation(
      (): string | google.maps.Icon | google.maps.Symbol | null | undefined =>
        null
    );
  public getLabel = vi
    .fn()
    .mockImplementation((): google.maps.MarkerLabel | null | undefined => null);
  public getMap = vi
    .fn()
    .mockImplementation(
      (): google.maps.Map | google.maps.StreetViewPanorama | null | undefined =>
        null
    );
  public getOpacity = vi
    .fn()
    .mockImplementation((): number | null | undefined => null);
  public getPosition = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLng | null | undefined =>
        new LatLng({ lat: 0, lng: 0 })
    );
  public getShape = vi
    .fn()
    .mockImplementation((): google.maps.MarkerShape | null | undefined => null);
  public getTitle = vi
    .fn()
    .mockImplementation((): string | null | undefined => null);
  public getVisible = vi.fn().mockImplementation((): boolean => null);
  public getZIndex = vi
    .fn()
    .mockImplementation((): number | null | undefined => null);
  public setAnimation = vi
    .fn()
    .mockImplementation((_animation: Animation | null): void => {});
  public setClickable = vi
    .fn()
    .mockImplementation((_flag: boolean): void => {});
  public setCursor = vi
    .fn()
    .mockImplementation((_cursor: string | null): void => {});
  public setDraggable = vi
    .fn()
    .mockImplementation((_flag: boolean | null): void => {});
  public setIcon = vi
    .fn()
    .mockImplementation(
      (_icon: string | google.maps.Icon | google.maps.Symbol | null): void => {}
    );
  public setLabel = vi
    .fn()
    .mockImplementation(
      (_label: string | google.maps.MarkerLabel | null): void => {}
    );
  public setMap = vi
    .fn()
    .mockImplementation(
      (
        _map: google.maps.Map | google.maps.StreetViewPanorama | null
      ): void => {}
    );
  public setOpacity = vi
    .fn()
    .mockImplementation((_opacity: number | null): void => {});
  public setOptions = vi
    .fn()
    .mockImplementation((_options: google.maps.MarkerOptions): void => {});
  public setPosition = vi
    .fn()
    .mockImplementation(
      (
        _latlng: google.maps.LatLng | google.maps.LatLngLiteral | null
      ): void => {}
    );
  public setShape = vi
    .fn()
    .mockImplementation((_shape: google.maps.MarkerShape | null): void => {});
  public setTitle = vi
    .fn()
    .mockImplementation((_title: string | null): void => {});
  public setVisible = vi
    .fn()
    .mockImplementation((_visible: boolean): void => {});
  public setZIndex = vi
    .fn()
    .mockImplementation((_zIndex: number | null): void => {});
  public addListener = vi
    .fn()
    .mockImplementation(
      (
        _eventName: string,
        _handler: (this: Marker, event: MouseEvent) => void
      ): google.maps.MapsEventListener => MapsEventListener
    );
}
