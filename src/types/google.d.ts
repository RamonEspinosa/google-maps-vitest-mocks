/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */

declare global {
  namespace google {
    namespace maps {
      class CameraOptions {}
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

      class Data {}
      namespace Data {
        class DataOptions {}
        class Feature {}
        class FeatureOptions {}
        class GeoJsonOptions {}
        class Geometry {}
        class StyleOptions {}
        class StylingFunction {}
      }

      const event: any;
      class Icon {}
      class LatLng {
        constructor({ lat, lng });
      }
      class LatLngBounds {}
      class LatLngBoundsLiteral {}
      class LatLngLiteral {}
      class Map {
        constructor(_mapDiv: Element, _opts?: MapOptions);
        setHeading: (heading: number) => void;
      }
      class MapsEventListener {}
      class MapOptions {}
      class MapType {}
      enum MapTypeId {
        HYBRID = "hybrid",
        ROADMAP = "roadmap",
        SATELLITE = "satellite",
        TERRAIN = "terrain",
      }
      class MapTypeRegistry {}
      class Marker {}
      class MarkerLabel {}
      class MarkerOptions {}
      class MarkerShape {}
      class MVCArray<T> {}
      class MVCObject {}
      class Padding {}
      class PanoProviderOptions {}
      class Projection {}
      class Point {
        constructor(x: number, y: number);
      }
      enum RenderingType {
        RASTER = "RASTER",
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
      class StreetViewPanorama {}
      class StreetViewPanoramaOptions {}
      class StreetViewPanoramaData {}
      class StreetViewPanoRequest {}
      class StreetViewPov {}
      class StreetViewResponse {}
      class StreetViewService {}
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
      const ImageMapType: Function;
    }
  }
}
export default google;
