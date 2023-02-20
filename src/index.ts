import { Map } from "@lib/maps/maps/map.js";
import { Data } from "@lib/drawing/data/data.js";
import { MVCObject } from "@lib/maps/event/MVCObject.js";
import { MVCArray } from "@lib/maps/event/MVCArray.js";
import { Marker } from "@lib/drawing/data/marker/marker.js";

export const initialize = () => {
  global.google = {
    maps: {
      Data,
      Map,
      MVCArray,
      MVCObject,
      Marker,
    },
  };
};
export { Data, Map, Marker, MVCObject, MVCArray };
