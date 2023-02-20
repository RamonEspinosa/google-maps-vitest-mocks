import { Map } from "@lib/maps/maps/map.js";
import { Data } from "@lib/drawing/data/data.js";
import { MVCObject } from "@lib/maps/event/MVCObject.js";
import { MVCArray } from "@lib/maps/event/MVCArray.js";
import { Marker } from "@lib/drawing/data/marker/marker.js";
import { ControlPosition } from "@lib/maps/controls/ControlPosition.js";

class MissingClass {}

export const initialize = () => {
  global.google = {
    maps: {
      CameraOptions: MissingClass,
      Data,
      Map,
      MVCArray,
      MVCObject,
      Marker,
      ControlPosition,
    },
  };
};
export { Data, Map, Marker, MVCObject, MVCArray };
