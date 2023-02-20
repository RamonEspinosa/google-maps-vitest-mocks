import { initialize } from "./index.js";
import { describe, expect, it } from "vitest";

describe("Initialize function", () => {
  it("should be defined", () => {
    expect(initialize).toBeDefined();
    expect(initialize).toBeTypeOf("function");
  });
  it("should define google maps in the global scope", () => {
    expect(global?.google?.maps).toBeUndefined();
    initialize();
    expect(global.google.maps).toBeDefined();
  });
});
