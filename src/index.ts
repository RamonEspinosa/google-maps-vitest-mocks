import { Map } from "@lib/maps/maps/map.js";
import { Data } from "@lib/drawing/data/data.js";
import { MVCObject } from "@lib/maps/event/MVCObject.js";
import { MVCArray } from "@lib/maps/event/MVCArray.js";
import { Marker } from "@lib/drawing/data/marker/marker.js";
import { ControlPosition } from "@lib/maps/controls/ControlPosition.js";
import { Point } from "@lib/maps/coordinates/point.js";
import { Size } from "@lib/maps/coordinates/size.js";
import { MapTypeId } from "@lib/maps/maps/constants.js";
import { LatLng, LatLngBounds } from "@lib/maps/coordinates/latlng.js";
import { event } from "@lib/maps/event/event.js";
import { vi } from "vitest";

class MissingClass {}

export const initialize = () => {
  global.google = {
    maps: {
      CameraOptions: MissingClass,
      ControlPosition,
      Data,
      event,
      ImageMapType: vi.fn(),
      LatLng,
      LatLngBounds,
      Map,
      MapTypeId,
      MVCArray,
      MVCObject,
      Marker,
      Point,
      Size,
    },
  };
};
export { Data, Map, Marker, MVCObject, MVCArray };
