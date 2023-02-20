import { mocks as mocks } from "./mocks.js";

export const initialize = (maps = mocks) => {
  global.google = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Too many properties, typing will be done incrementally
    maps,
  };
};
