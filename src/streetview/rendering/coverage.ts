import { MVCObject } from "@lib/maps/event/MVCObject.js";
import { vi } from "vitest";

export class StreetViewCoverageLayer
  extends MVCObject
  implements google.maps.StreetViewCoverageLayer
{
  public getMap = vi
    .fn()
    .mockImplementation((): google.maps.Map | null => null);
  public setMap = vi
    .fn()
    .mockImplementation((_map: google.maps.Map | null): void => null);
}
