import { add } from './stringCalculator';

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number for a single number', () => {
    expect(add("1")).toBe(1);
  });

  test('should return the sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
  });

  //Allow the add method to handle any amount of numbers.

  test('should return the sum of multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

 //  Allow the add method to handle new lines between numbers (instead of commas). ("1\n2,3" should return 6)
  test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  //Support different delimiters:

  test('should handle custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

 //Calling add with a negative number will throw an exception
  test('should throw an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });

  //multiple negative numbers, show all of them in the exception message, separated by commas.
  
  test('should show all negative numbers in the error message', () => {
    expect(() => add("1,-2,-3,4")).toThrow("Negative numbers not allowed: -2,-3");
  });
  

});
