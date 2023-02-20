import { vi } from "vitest";

export const MapsEventListener: google.maps.MapsEventListener = {
  remove: vi.fn(),
};

export const event: typeof google.maps.event = {
  addDomListener: vi
    .fn()
    .mockImplementation(
      (
        _instance: object,
        _eventName: string,
        _handler: Function,
        _capture?: boolean
      ): google.maps.MapsEventListener => MapsEventListener
    ),
  addDomListenerOnce: vi
    .fn()
    .mockImplementation(
      (
        _instance: object,
        _eventName: string,
        _handler: Function,
        _capture?: boolean
      ): google.maps.MapsEventListener => MapsEventListener
    ),
  addListener: vi
    .fn()
    .mockImplementation(
      (
        _instance: object,
        _eventName: string,
        _handler: Function
      ): google.maps.MapsEventListener => MapsEventListener
    ),
  addListenerOnce: vi
    .fn()
    .mockImplementation(
      (
        _instance: object,
        _eventName: string,
        _handler: Function
      ): google.maps.MapsEventListener => MapsEventListener
    ),
  clearInstanceListeners: vi
    .fn()
    .mockImplementation((_instance: object): void => null),
  clearListeners: vi
    .fn()
    .mockImplementation((_instance: object, _eventName: string): void => null),
  hasListeners: vi
    .fn()
    .mockImplementation(
      (_instance: object, _eventName: string): boolean => false
    ),
  removeListener: vi
    .fn()
    .mockImplementation(
      (_listener: google.maps.MapsEventListener): void => null
    ),
  trigger: vi
    .fn()
    .mockImplementation(
      (_instance: object, _eventName: string, ..._eventArgs: any[]): void =>
        null
    ),
};
