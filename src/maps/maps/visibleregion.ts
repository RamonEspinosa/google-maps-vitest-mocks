import { MVCObject } from "@lib/maps/event/MVCObject.js";

export class VisibleRegion
  extends MVCObject
  implements google.maps.VisibleRegion
{
  public readonly farLeft: google.maps.LatLng;
  public readonly farRight: google.maps.LatLng;
  public readonly latLngBounds: google.maps.LatLngBounds;
  public readonly nearLeft: google.maps.LatLng;
  public readonly nearRight: google.maps.LatLng;
}
