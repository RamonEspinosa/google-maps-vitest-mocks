import { Map } from "@lib/maps/maps/map.js";
import { Data } from "@lib/drawing/data/data.js";
import { MVCObject } from "@lib/maps/event/MVCObject.js";
import { MVCArray } from "@lib/maps/event/MVCArray.js";

export const initialize = () => {
  global.google = {
    maps: {
      Data,
      Map,
      MVCArray,
      MVCObject,
    },
  };
};
export { Data, Map, MVCObject, MVCArray };
