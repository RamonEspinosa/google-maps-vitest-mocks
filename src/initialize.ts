import { maps } from "@lib/maps.js";

export const initialize = () => {
  global.google = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Too many properties, typing will be done incrementally
    maps,
  };
};
