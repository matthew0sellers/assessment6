const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('returns an array', () => {
    const result = shuffle([1, 2, 3]);
    expect(Array.isArray(result)).toBe(true);
  });

  test('returns an array with the same length as the input array', () => {
    const inputArray = [1, 2, 3, 4];
    const result = shuffle(inputArray);
    expect(result).toHaveLength(inputArray.length);
  });
});
  


// describe('shuffle function', () => {
