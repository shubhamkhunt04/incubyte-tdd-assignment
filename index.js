function add(numbers) {
  if (!numbers) return 0;

  let defaultDelimiter = /[\n,]/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    defaultDelimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
    numbers = parts[1]; // Remaining numbers
  }

  return numbers
    .split(defaultDelimiter)
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
}

module.exports = add;