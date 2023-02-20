import { vi } from "vitest";

export class Point implements google.maps.Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  public equals(other: Point): boolean {
    return other.x === this.x && other.y === this.y;
  }
  public toString = vi.fn().mockImplementation((): string => {
    return "";
  });
}
