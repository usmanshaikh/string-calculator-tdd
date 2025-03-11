import { add } from '../src/string-calculator';

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('should return the number itself if a single number', () => {
    expect(add('1')).toBe(1);
  });

  test('should return the sum of two numbers', () => {
    expect(add('1,2')).toBe(3);
  });

  test('should return the sum of multiple numbers', () => {
    expect(add('10,20,30,40,50,60,70')).toBe(280);
    expect(add('100,200,300,400')).toBe(1000);
  });
});
