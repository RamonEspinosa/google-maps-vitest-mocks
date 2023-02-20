import { Autocomplete } from "@lib/places/autocomplete.js";
import { SearchBox } from "@lib/places/searchbox.js";
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
import { StreetViewPanorama } from "@lib/streetview/rendering/panorama.js";
import { StreetViewService } from "@lib/streetview/service/service.js";
import { StreetViewCoverageLayer } from "@lib/streetview/rendering/coverage.js";
import {
  StreetViewPreference,
  StreetViewSource,
  StreetViewStatus,
} from "@lib/streetview/service/constants.js";
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
      StreetViewCoverageLayer,
      StreetViewPanorama,
      StreetViewPreference,
      StreetViewService,
      StreetViewSource,
      StreetViewStatus,
      places: {
        Autocomplete,
        SearchBox,
        AutocompleteOptions: MissingClass,
        ComponentRestrictions: MissingClass,
        PlaceResult: MissingClass,
      },
    },
  };
};
export { Data, Map, Marker, MVCObject, MVCArray };
