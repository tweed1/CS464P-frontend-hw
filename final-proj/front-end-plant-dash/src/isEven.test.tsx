import isEven from "./isEven"

describe('isEven', () => {
    if('returns true is even', () => {
        expect(isEven(2)).toBe(true);
    })
});