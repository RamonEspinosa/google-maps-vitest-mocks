import { __registerMockInstance } from "@lib/registry.js";
import { afterEach, vi } from "vitest";
import { MapsEventListener } from "@lib/maps/event/event.js";

/* eslint-disable @typescript-eslint/no-explicit-any */

export class MVCObject implements google.maps.MVCObject {
  public static _mockClasses: (typeof MVCObject)[] = [];
  public static mockInstances: MVCObject[] = [];

  public constructor() {
    const ctor = this.constructor as typeof MVCObject;

    __registerMockInstance(ctor, this);

    if (ctor.mockInstances === undefined) {
      ctor.mockInstances = [];
    }

    if (MVCObject._mockClasses === undefined) {
      MVCObject._mockClasses = [];
    }

    ctor.mockInstances.push(this);
    MVCObject._mockClasses.push(ctor);
  }

  public addListener = vi
    .fn()
    .mockImplementation(
      (_eventName: string, _handler: Function): google.maps.MapsEventListener =>
        MapsEventListener
    );
  public bindTo = vi
    .fn()
    .mockImplementation(
      (
        _key: string,
        _target: MVCObject,
        _targetKey?: string,
        _noNotify?: boolean
      ): void => null
    );
  public changed = vi.fn().mockImplementation((_key: string): void => null);
  public get = vi.fn().mockImplementation((_key: string): any => {});
  public notify = vi.fn().mockImplementation((_key: string): void => null);
  public set = vi
    .fn()
    .mockImplementation((_key: string, _value: any): void => null);
  public setValues = vi.fn().mockImplementation((_values: any): void => null);
  public unbind = vi.fn().mockImplementation((_key: string): void => null);
  public unbindAll = vi.fn().mockImplementation(() => null);
}

// if running a test that supports afterEach, then we will cleanup the instances
// automatically at the end of each test.
if (typeof afterEach === "function") {
  afterEach(() => {
    if (MVCObject._mockClasses) {
      for (const ctor of MVCObject._mockClasses) {
        ctor.mockInstances = undefined;
      }
    }
    MVCObject._mockClasses = undefined;
  });
}
