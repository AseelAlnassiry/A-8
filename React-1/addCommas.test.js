const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("1234", () => {
    expect(addCommas(1234)).toEqual('1,234')
  });
  test("1000000", () => {
    expect(addCommas(1000000)).toEqual('1,000,000')
  });
  test("9876543210", () => {
    expect(addCommas(9876543210)).toEqual('9,876,543,210')
  });
  test("-10", () => {
    expect(addCommas(-10)).toEqual('-10')
  });
  test("-5678", () => {
    expect(addCommas(-5678)).toEqual('-5,678')
  });
});
