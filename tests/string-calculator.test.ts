import { add } from '../src/string-calculator';

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('should return the number itself if a single number', () => {
    expect(add('1')).toBe(1);
  });

  test('should return the sum of two numbers', () => {
    expect(add('1,1')).toBe(2);
  });

  test('should return the sum of multiple numbers', () => {
    expect(add('1,1,1,1,1')).toBe(5);
  });

  test('should return the sum of numbers if new lines are between numbers', () => {
    expect(add('1\n1,1')).toBe(3);
    expect(add('1\n2,1,1,1\n2,\n2')).toBe(10);
  });
});
