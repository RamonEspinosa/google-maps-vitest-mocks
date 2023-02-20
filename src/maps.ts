import { Autocomplete } from "./places/autocomplete.js";
import { SearchBox } from "./places/searchbox.js";
import { Circle } from "./drawing/polygons/circle.js";
import { Map } from "./maps/maps/map.js";
import { Data } from "./drawing/data/data.js";
import { KmlLayer } from "./drawing/kml/kmllayer.js";
import { MVCObject } from "./maps/event/MVCObject.js";
import { MVCArray } from "./maps/event/MVCArray.js";
import { Marker } from "./drawing/data/marker/marker.js";
import { ControlPosition } from "./maps/controls/ControlPosition.js";
import { Point } from "./maps/coordinates/point.js";
import { Size } from "./maps/coordinates/size.js";
import { MapTypeId } from "./maps/maps/constants.js";
import { LatLng, LatLngBounds } from "./maps/coordinates/latlng.js";
import { event } from "./maps/event/event.js";
import { OverlayView } from "./drawing/DOM/overlayview.js";
import { StreetViewPanorama } from "./streetview/rendering/panorama.js";
import { StreetViewService } from "./streetview/service/service.js";
import { StreetViewCoverageLayer } from "./streetview/rendering/coverage.js";
import {
  StreetViewPreference,
  StreetViewSource,
  StreetViewStatus,
} from "./streetview/service/constants.js";
import { Polyline } from "./drawing/polygons/polyline.js";
import { Polygon } from "./drawing/polygons/polygon.js";
import { Rectangle } from "./drawing/polygons/rectangle.js";
import { MapCanvasProjection } from "./drawing/DOM/mapcanvasprojection.js";
import { MapPanes } from "./drawing/DOM/mappanes.js";
import { VisibleRegion } from "./maps/maps/visibleregion.js";
import { InfoWindow } from "./maps/infowindow/infowindow.js";
import { RenderingType } from "./types/RenderingType.js";
import { vi } from "vitest";
import missing from "./missing.js";

export const maps = {
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
};
