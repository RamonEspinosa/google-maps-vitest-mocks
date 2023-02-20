import { Autocomplete } from "@lib/places/autocomplete.js";
import { SearchBox } from "@lib/places/searchbox.js";
import { Circle } from "@lib/drawing/polygons/circle.js";
import { Map } from "@lib/maps/maps/map.js";
import { Data } from "@lib/drawing/data/data.js";
import { Feature } from "@lib/drawing/data/data.feature.js";
import { KmlLayer } from "@lib/drawing/kml/kmllayer.js";
import { MVCObject } from "@lib/maps/event/MVCObject.js";
import { MVCArray } from "@lib/maps/event/MVCArray.js";
import { Marker } from "@lib/drawing/data/marker/marker.js";
import { ControlPosition } from "@lib/maps/controls/ControlPosition.js";
import { Point } from "@lib/maps/coordinates/point.js";
import { Size } from "@lib/maps/coordinates/size.js";
import { MapTypeId } from "@lib/maps/maps/constants.js";
import { LatLng, LatLngBounds } from "@lib/maps/coordinates/latlng.js";
import { event } from "@lib/maps/event/event.js";
import { OverlayView } from "@lib/drawing/DOM/overlayview.js";
import { StreetViewPanorama } from "@lib/streetview/rendering/panorama.js";
import { StreetViewService } from "@lib/streetview/service/service.js";
import { StreetViewCoverageLayer } from "@lib/streetview/rendering/coverage.js";
import {
  StreetViewPreference,
  StreetViewSource,
  StreetViewStatus,
} from "@lib/streetview/service/constants.js";
import { Polyline } from "@lib/drawing/polygons/polyline.js";
import { Polygon } from "@lib/drawing/polygons/polygon.js";
import { Rectangle } from "@lib/drawing/polygons/rectangle.js";
import { MapCanvasProjection } from "@lib/drawing/DOM/mapcanvasprojection.js";
import { MapPanes } from "@lib/drawing/DOM/mappanes.js";
import { VisibleRegion } from "@lib/maps/maps/visibleregion.js";
import { InfoWindow } from "@lib/maps/infowindow/infowindow.js";
import { RenderingType } from "@lib/types/RenderingType.js";
import { vi } from "vitest";
import missing from "@lib/missing.js";
import { mockInstances } from "@lib/registry.js";

export const initialize = () => {
  global.google = {
    maps: {
      ...missing,
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
        ...missing.places,
      },
      Circle,
      Polygon,
      Polyline,
      Rectangle,
      OverlayView,
      KmlLayer,
      MapCanvasProjection,
      MapPanes,
      RenderingType,
      VisibleRegion,
      InfoWindow,
    },
  };
};
export {
  Autocomplete,
  Circle,
  Data,
  event,
  Feature,
  LatLng,
  LatLngBounds,
  MVCArray,
  MVCObject,
  MapCanvasProjection,
  MapPanes,
  Map,
  Marker,
  OverlayView,
  KmlLayer,
  Point,
  Polygon,
  Polyline,
  Rectangle,
  SearchBox,
  Size,
  StreetViewCoverageLayer,
  StreetViewPanorama,
  StreetViewService,
  VisibleRegion,
  InfoWindow,
  mockInstances,
};
