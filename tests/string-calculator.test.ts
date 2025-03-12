import { add } from '../src/string-calculator';

describe('Basic Calculations', () => {
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
});

describe('Handling New Line Delimiters', () => {
  test('should return the sum of numbers if new lines are between numbers', () => {
    expect(add('1\n1,1')).toBe(3);
    expect(add('1\n2,1,1,1\n2,\n2')).toBe(10);
  });
});

describe('Handling Negative Numbers', () => {
  test('should throw an error when a negative number is provided', () => {
    expect(() => add('1,-1')).toThrow('negative numbers not allowed: -1');
  });

  test('should throw an error when multiple negative numbers are provided, listing all negative numbers', () => {
    expect(() => add('1,-1,-2,-3')).toThrow('negative numbers not allowed: -1, -2, -3');
  });
});

describe('Handling Non-Numeric', () => {
  test('should return the sum of numbers while ignoring alphabets', () => {
    expect(add('1,a,1')).toBe(2);
  });

  test('should return the sum of numbers while ignoring multiple alphabets and empty values', () => {
    expect(add('1,a,1,b,,')).toBe(2);
  });

  test('should return 0 if the input contains only commas', () => {
    expect(add(',,,,,')).toBe(0);
  });
});

describe('Special Cases', () => {
  test('should return the sum of numbers, ignoring numbers greater than 1000', () => {
    expect(add('1,1,1000,1001')).toBe(1002);
  });

  test('should return the sum of numbers using a custom delimiter', () => {
    expect(add('//;\n1;2')).toBe(3);
  });
});
