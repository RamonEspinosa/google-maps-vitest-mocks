import { maps } from "@lib/maps.js";

export const initialize = () => {
  global.google = {
    maps,
  };
};
