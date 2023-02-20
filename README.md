# Google maps vitest mocks

**NOTE**: This package is still under development.

⚡️ Easy to use vitest mocks for google maps.
This is a rewrite of [@googlemaps/js-jest-mocks](https://github.com/googlemaps/js-jest-mocks), meant to be used with [vitest](https://vitest.dev) instead of jest.

## Getting started

### Installation and usage

With npm:

```bash
$ npm i --save-dev google-maps-vitest-mocks
# or
$ yarn add -D  google-maps-vitest-mocks

```

### Usage

This package is meant to be used the same way as [@googlemaps/js-jest-mocks](https://github.com/googlemaps/js-jest-mocks).

#### Inspecting mocks

You can inspect what happens with the created mock instances (e.g. Map or Marker) via the mockInstances object.

```js
import {
  initialize,
  Map,
  Marker,
  mockInstances,
} from "google-maps-vitest-mocks";
import { beforeEach, test, expect } from "vitest";

beforeEach(() => {
  initialize();
});

test("my test", () => {
  const map = new google.maps.Map(null);
  const markerOne = new google.maps.Marker();
  const markerTwo = new google.maps.Marker();

  map.setHeading(8);
  markerOne.setMap(map);
  markerTwo.setLabel("My marker");

  const mapMocks = mockInstances.get(Map);
  const markerMocks = mockInstances.get(Marker);

  expect(mapMocks).toHaveLength(1);
  expect(markerMocks).toHaveLength(2);
  expect(mapMocks[0].setHeading).toHaveBeenCalledWith(8);
  expect(markerMocks[0].setMap).toHaveBeenCalledTimes(1);
  expect(markerMocks[1].setLabel).toHaveBeenCalledWith("My marker");
});
```

#### Cleaning up mocks

Whenever initialize() is called, the captured mocks are automatically cleaned. Using any of Jest's methods, you can clean the mock instances at any time:

```js
import {
  initialize,
  Map,
  Marker,
  mockInstances,
} from "google-maps-vitest-mocks";
import { beforeAll, beforeEach } from "vitest";

beforeAll(() => {
  initialize();
});

// Clear all mocks
beforeEach(() => {
  mockInstances.clearAll();
});

// Clear specific mocks
beforeEach(() => {
  mockInstances.clear(Map, Marker);
});
```

## Contributing

If you want to contribute to this repository and don't know how, please follow [this tutorial](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github). Here's

1. Fork the repository and create your branch.
1. Run `npm install` in the repository root.
1. If you've fixed a bug or added code that should be tested, please add tests.
1. Ensure the test suite passes with `npm run test`.
1. Make sure your code lints and follows this project code's style.
1. Send a pull request specifying the type of commit:
   - **feat**: A new feature you're adding.
   - **fix**: A bug fix.
   - **refactor**: Refactoring a specific section of the codebase.
   - **test**: Everything related to testing.
   - **docs**: Everything related to documentation.
   - **chore**: Regular code maintenance.

## License

MIT License
