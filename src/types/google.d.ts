/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */

declare global {
  namespace google {
    namespace maps {
      class CameraOptions {}
      class ControlPosition {}

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
    }
  }
}
export default google;
