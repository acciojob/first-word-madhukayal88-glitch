function firstWord(str) {
  // If the string is empty, return it immediately
  if (!str) {
    return "";
  }

  // 1. Remove leading spaces using trimStart()
  // 2. split(' ') creates an array of substrings separated by spaces
  // 3. [0] retrieves the very first element of that array
  return str.trimStart().split(' ')[0];
}

// Example usage:
// console.log(firstWord('see and stop')); // 'see'
// console.log(firstWord(' Hello World!')); // 'Hello'