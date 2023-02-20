import { LatLng } from "../../maps/coordinates/latlng.js";
import { Size } from "../../maps/coordinates/size.js";
import { __registerMockInstance } from "../../registry.js";
import { vi } from "vitest";

export class StreetViewService implements google.maps.StreetViewService {
  constructor() {
    __registerMockInstance(this.constructor, this);
  }
  public getPanorama = vi
    .fn()
    .mockImplementation(
      (
        _request:
          | google.maps.StreetViewLocationRequest
          | google.maps.StreetViewPanoRequest,
        _callback?: (
          a: google.maps.StreetViewPanoramaData | null,
          b: google.maps.StreetViewStatus
        ) => void
      ): Promise<google.maps.StreetViewResponse> => {
        return Promise.resolve({
          data: {
            copyright: "copyright",
            imageDate: "imageDate",
            links: [],
            location: {
              description: "description",
              pano: "123",
              shortDescription: null,
              latLng: new LatLng(1, 1),
            },
            tiles: {
              centerHeading: 0,
              getTileUrl: () => "tileUrl",
              tileSize: new Size(1, 1),
              worldSize: new Size(1, 1),
            },
          },
        });
      }
    );
}
