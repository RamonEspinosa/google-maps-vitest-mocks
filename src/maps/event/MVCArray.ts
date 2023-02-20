import { MVCObject } from "../../maps/event/MVCObject.js";
import { vi } from "vitest";

export class MVCArray<T> extends MVCObject implements google.maps.MVCArray<T> {
  constructor(_array?: T[]) {
    super();
  }

  public clear = vi.fn().mockImplementation((): void => {});
  public forEach = vi
    .fn()
    .mockImplementation((_callback: (elem: T, i: number) => void): void => {});

  public getArray = vi.fn().mockImplementation((): T[] => []);
  public getAt = vi.fn().mockImplementation((_i: number): T => ({} as T));
  public getLength = vi.fn().mockImplementation((): number => 0);
  public insertAt = vi
    .fn()
    .mockImplementation((_i: number, _elem: T): void => {});
  public pop = vi.fn().mockImplementation((): T => ({} as T));
  public push = vi.fn().mockImplementation((_elem: T): number => 0);
  public removeAt = vi.fn().mockImplementation((_i: number): T => ({} as T));
  public setAt = vi.fn().mockImplementation((_i: number, _elem: T): void => {});
}
