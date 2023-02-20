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
        ROADMAP = "ROADMAP",
      }
      class MapTypeRegistry {}
      class Marker {}
      class MarkerLabel {}
      class MarkerOptions {}
      class MarkerShape {}
      class MVCArray<T> {}
      class MVCObject {}
      class Padding {}
      class Projection {}
      class Point {}
      enum RenderingType {
        RASTER = "RASTER",
      }
      class Size {}
      class StreetViewPanorama {}
      class Symbol {}
    }
  }
}
export default google;
