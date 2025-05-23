#!/usr/bin/env node

function factorial(n) {
  // Convert to integer
  const num = parseInt(n);
  
  // If NaN or invalid, return 1
  if (isNaN(num) || num < 0) {
    return 1;
  }
  
  // Base case
  if (num === 0 || num === 1) {
    return 1;
  }
  
  // Recursive case
  return num * factorial(num - 1);
}

// Get command line argument
const arg = process.argv[2];

// Compute and print factorial
console.log(factorial(arg));