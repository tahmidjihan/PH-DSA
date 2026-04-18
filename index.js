function reverseString(s) {
  if (typeof s !== 'string') return 'Input should be a valid string';
  if (s.length > 1000) return 'Input length should be less than or equal 100';
  return s.split('').reverse().join('');
}

function fizzBuzz(n) {
  if (typeof n !== 'number') return 'the input should be a valid number';
  if (!(1 <= n) && !(n <= 100))
    return 'The input should be more than or equal one or less than or equal 100';
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push('FizzBuzz');
    }
    if (i % 3 == 0) {
      arr.push('Fizz');
    }
    if (i % 5 == 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}
function findLargest(nums) {
  if (!Array.isArray(nums)) return 'input should be an array';
  if (nums.length === 0) return 'array should contain something';
  if (nums.some((item) => typeof item !== 'number'))
    return 'the values in the array should be number';
  return Math.max(...nums);
}

function isPalindrome(s) {
  if (typeof s !== 'string') return 'Input should be a string';
  const cleanedStr = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversed = s.split('').reverse().join('');
  return s === reversed;
}
function sumOfArray(nums) {
  if (!Array.isArray(nums)) return 'input should be an array';
  if (nums.length === 0) return 'array should contain something';
  if (nums.some((item) => typeof item !== 'number'))
    return 'the values in the array should be number';
  if (nums.length > 500)
    return ' The input length should be less than or equal 500';
  return nums.reduce((sum, num) => sum + num, 0);
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
function evenOrOdd(nums) {
  if (!Array.isArray(nums)) return 'Input must be an array';
  const result = nums.map((num) => {
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
function lowestOfArray(nums) {
  if (!Array.isArray(nums)) return 'Input must be an array';
  if (nums.length === 0) return 'Input array cannot be empty';
  return Math.min(...nums);
}

// Function to remove duplicates from an array
function removeDuplicates(nums) {
  if (!Array.isArray(nums)) return 'Input must be an array';
  return [...new Set(nums)];
}
