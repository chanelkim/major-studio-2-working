function generateRandomKey(array1, array2, array3) {
  // Select a random element from each array
  const randomElement1 = array1[Math.floor(Math.random() * array1.length)];
  const randomElement2 = array2[Math.floor(Math.random() * array2.length)];
  const randomElement3 = array3[Math.floor(Math.random() * array3.length)];

  // Combine the selected elements to create the key
  const randomKey = `${randomElement1}-${randomElement2}-${randomElement3}`;

  return randomKey;
}

// Example usage with three arrays
// const array1 = [1, 2, 3, 4, 5, 6];
// const array1 = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const array1 = [19, 20];
const array2 = ["A", "B", "C", "D", "E"];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// // Generate 10 keys
// for (let i = 0; i < 10; i++) {
//   const generatedKey = generateRandomKey(array1, array2, array3);
//   console.log(generatedKey);
// }

// Array to store the generated keys
const generatedKeys = [];

// Generate 10 keys
for (let i = 0; i < 10; i++) {
  const key = generateRandomKey(array1, array2, array3);
  generatedKeys.push(key);
}

// Sort the generated keys in sequential order
generatedKeys.sort();

// Print the generated keys
console.log(generatedKeys);
