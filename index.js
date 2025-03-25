function add(numbers) {
  if (!numbers) return 0;
  return numbers
    .split(/[\n,]/)  // Allow both comma `,` and newline `\n`
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
}

module.exports = add