// Function to reverse a string
function reverseString(str) {
  if (typeof str !== 'string') return 'Input must be a string';
  return str.split('').reverse().join('');
}

// Function FizzBuzz that takes a positive integer n and returns an array of the numbers from 1 to n, but for multiples of three it returns "Fizz" instead of the number, for multiples of five it returns "Buzz", and for numbers which are multiples of both three and five it returns "FizzBuzz".
function FizzBuzz(n) {
  if (typeof n !== 'number' || n < 1) return 'Input must be a positive integer';
  if (n > 100) return 'Input must be less than or equal to 100';
  if (n === 1 || n === 0) return 'input must be greater than 1';
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
}

// Function to find the largest number in an array
function largestOfArray(arr) {
  if (!Array.isArray(arr)) return 'Input must be an array';
  if (arr.length === 0) return 'Input array cannot be empty';
  return Math.max(...arr);
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  if (typeof str !== 'string') return 'Input must be a string';
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

// Sum of an array of numbers
function sumOfArray(arr) {
  if (!Array.isArray(arr)) return 'Input must be an array';
  if (arr.some((item) => typeof item !== 'number'))
    return 'All items in the array must be numbers';
  return arr.reduce((sum, num) => sum + num, 0);
}

// Factorial of a number
function factorial(n) {
  if (typeof n !== 'number' || n < 0)
    return 'Input must be a non-negative integer';
  const sequence = [n];
  for (let i = 1; i <= n; i++) {
    sequence.push(sequence[i - 1] - 1);
  }
  const zero = sequence.indexOf(0);
  if (typeof 0 == 'number') {
    sequence.splice(zero, 1);
  }
  return sequence.reduce((prev, num) => prev * num, 1);
  // return sequence;
}
console.log(factorial(10));

// Even or Odd
function evenOrOdd(arr) {
  if (!Array.isArray(arr)) return 'Input must be an array';
  const result = arr.map((num) => {
    if (typeof num !== 'number')
      return 'All items in the array must be numbers';
    return num % 2 === 0 && num;
  });
  return result;
}

// Fibonacci Sequence
function fibonacci(n) {
  if (typeof n !== 'number' || n < 0)
    return 'Input must be a non-negative integer';
  const sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}
// Function to find the lowest number in an array
function lowestOfArray(arr) {
  if (!Array.isArray(arr)) return 'Input must be an array';
  if (arr.length === 0) return 'Input array cannot be empty';
  return Math.min(...arr);
}

// Function to remove duplicates from an array
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) return 'Input must be an array';
  return [...new Set(arr)];
}
