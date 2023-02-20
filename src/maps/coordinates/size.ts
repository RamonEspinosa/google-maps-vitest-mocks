import { vi } from "vitest";

export class Size implements google.maps.Size {
  height: number;
  width: number;
  constructor(
    width: number,
    height: number,
    _widthUnit?: string,
    _heightUnit?: string
  ) {
    this.width = width;
    this.height = height;
  }
  equals(other: Size): boolean {
    return other.height === this.height && other.width === this.width;
  }
  toString = vi.fn().mockImplementation((): string => {
    return "";
  });
}
