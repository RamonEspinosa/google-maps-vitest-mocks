/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */

declare global {
  namespace google {
    namespace maps {
      class CameraOptions {}
      class Circle {
        constructor(_opt?: google.maps.CircleOptions);
      }
      class CircleOptions {}
      enum ControlPosition {
        BOTTOM_CENTER = 0.0,
        BOTTOM_LEFT = 1.0,
        BOTTOM_RIGHT = 2.0,
        LEFT_BOTTOM = 3.0,
        LEFT_CENTER = 4.0,
        LEFT_TOP = 5.0,
        RIGHT_BOTTOM = 6.0,
        RIGHT_CENTER = 7.0,
        RIGHT_TOP = 8.0,
        TOP_CENTER = 9.0,
        TOP_LEFT = 10.0,
        TOP_RIGHT = 11.0,
      }

      class Data {
        constructor(_opt?: google.maps.Data.DataOptions | null);
        get;
      }
      namespace Data {
        class DataOptions {}
        class Feature {
          constructor(_options?: google.maps.Data.FeatureOptions | null);
        }
        class FeatureOptions {}
        class GeoJsonOptions {}
        class Geometry {}
        class StyleOptions {}
        class StylingFunction {}
      }

      const event;
      class Icon {}
      class InfoWindow {}
      class InfoWindowOpenOptions {}
      class InfoWindowOptions {}
      const ImageMapType: Function;
      class KmlLayer {}
      class KmlLayerMetadata {}
      class KmlLayerOptions {}
      class KmlLayerStatus {}
      class LatLng {
        constructor({ lat, lng });
      }
      class LatLngBounds {}
      class LatLngBoundsLiteral {}
      class LatLngLiteral {}
      class Map {
        constructor(_mapDiv: Element, _opts?: MapOptions);
        public controls: Array<google.maps.MVCArray<Node>>;
        public data: google.maps.Data;
        public mapTypes: google.maps.MapTypeRegistry;
        public overlayMapTypes: google.maps.MVCArray<google.maps.MapType>;
        fitBounds;
        getBounds;
        getCenter;
        getClickableIcons;
        getDiv;
        getHeading;
        getMapTypeId;
        getProjection;
        getRenderingType;
        getStreetView;
        getTilt;
        getZoom;
        moveCamera;
        panBy;
        panTo;
        panToBounds;
        setCenter;
        setHeading;
        setMapTypeId;
        setOptions;
        setStreetView;
        setTilt;
        setZoom;
        setClickableIcons;
      }
      class MapCanvasProjection {}
      class MapOptions {}
      class MapPanes {}
      class MapsEventListener {}
      class MapType {}
      enum MapTypeId {
        HYBRID = "hybrid",
        ROADMAP = "roadmap",
        SATELLITE = "satellite",
        TERRAIN = "terrain",
      }
      class MapTypeRegistry {}
      class Marker {
        static readonly MAX_ZINDEX;
        getAnimation;
        getClickable;
        getCursor;
        getDraggable;
        getIcon;
        getLabel;
        getMap;
        getOpacity;
        getPosition;
        getShape;
        getTitle;
        getVisible;
        getZIndex;
        setAnimation;
        setClickable;
        setCursor;
        setDraggable;
        setIcon;
        setLabel;
        setMap;
        setOpacity;
        setOptions;
        setPosition;
        setShape;
        setTitle;
        setVisible;
        setZIndex;
        addListener;
      }
      class MarkerLabel {}
      class MarkerOptions {}
      class MarkerShape {}
      class MVCArray<T> {}
      class MVCObject {}
      class OverlayView {}
      class Padding {}
      namespace places {
        class Autocomplete {
          constructor(
            _inputField: HTMLInputElement,
            _opts?: google.maps.places.AutocompleteOptions
          );
        }
        class AutocompleteOptions {}
        class ComponentRestrictions {}
        class PlaceResult {}
        class SearchBox {
          constructor(
            _inputField: HTMLInputElement,
            _opts?: google.maps.places.SearchBoxOptions | null
          );
        }
        class SearchBoxOptions {}
      }
      class PanoProviderOptions {}
      class Projection {}
      class Point {
        constructor(x: number, y: number);
      }
      class Polygon {
        constructor(_opts?: google.maps.PolygonOptions | null);
        getDraggable;
        getEditable;
        getMap;
        getPath;
        getPaths;
        getVisible;
        setDraggable;
        setEditable;
        setMap;
        setOptions;
        setPath;
        setPaths;
        setVisible;
      }
      class PolygonOptions {}
      class Polyline {}
      class PolylineOptions {}
      class Rectangle {
        constructor(_opt?: google.maps.RectangleOptions);
        getBounds;
        getDraggable;
        getEditable;
        getMap;
        getVisible;
        setBounds;
        setDraggable;
        setEditable;
        setMap;
        setOptions;
        setVisible;
      }
      class RectangleOptions {}
      enum RenderingType {
        RASTER = "RASTER",
        UNINITIALIZED = "UNINITIALIZED",
        VECTOR = "VECTOR",
      }
      class Size {
        constructor(
          width: number,
          height: number,
          _widthUnit?: string,
          _heightUnit?: string
        );
      }
      class StreetViewCoverageLayer {}
      class StreetViewLink {}
      class StreetViewLocation {}
      class StreetViewLocationRequest {}
      class StreetViewPanorama {
        constructor(
          _container: HTMLElement,
          _opts?: google.maps.StreetViewPanoramaOptions | null
        );
      }
      class StreetViewPanoramaOptions {}
      class StreetViewPanoramaData {}
      class StreetViewPanoRequest {}
      class StreetViewPov {}
      class StreetViewResponse {}
      class StreetViewService {
        getPanorama;
      }
      enum StreetViewPreference {
        BEST = "best",
        NEAREST = "nearest",
      }
      enum StreetViewSource {
        DEFAULT = "default",
        OUTDOOR = "outdoor",
      }
      enum StreetViewStatus {
        OK = "OK",
        UNKNOWN_ERROR = "UNKNOWN_ERROR",
        ZERO_RESULTS = "ZERO_RESULTS",
      }

      class Symbol {}
      class VisibleRegion {}
    }
  }
}
export default google;
