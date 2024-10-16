import { deepEqual } from "node:assert/strict";
import test from "node:test";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

test("run a chain of promises with a nested promise", () => {
  return Promise.resolve([1, 2, 3])
    .then((data) => {
      return sleep(5000).then(() => data);
    })
    .then((data) => {
      return data.map((value) => value + 1);
    })
    .then((data) => {
      deepEqual(data, [2, 3, 4]);
    });
});
