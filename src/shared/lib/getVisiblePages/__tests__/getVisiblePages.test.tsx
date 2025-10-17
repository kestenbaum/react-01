import { getVisiblePages } from '../getVisiblePages';
import '@testing-library/jest-dom';

describe('getVisiblePages', () => {
  test('returns an array of numbers in the correct range', () => {
    const result = getVisiblePages(2, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('if there are less than 3 pages, it returns all', () => {
    const result = getVisiblePages(1, 2);
    expect(result).toEqual([1, 2]);
  });

  test('cuts off boundaries when going to the end', () => {
    const result = getVisiblePages(9, 10);
    expect(result.includes(10)).toBe(true);
  });
});
