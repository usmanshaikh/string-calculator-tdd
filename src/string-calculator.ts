export const add = (n: string): number => {
  // Return 0 if the input string is empty
  if (!n) return 0;

  // Replace newline characters with commas
  let str = n.replace(/\n/g, ',');

  // Convert string into an array of numbers
  const number = str.split(',').map((num) => Number(num));

  // Check for negative numbers and throw an error
  const hasNegative = number.some((num) => num < 0);
  if (hasNegative) {
    throw new Error(`negative numbers not allowed: ${number.filter((num) => num < 0).join(', ')}`);
  }

  // If there are numbers greater than 1000 filter them out
  if (number.some((num) => num > 1000)) {
    return number
      .filter((num) => num <= 1000)
      .reduce((acc, cur) => {
        return acc + (isNaN(cur) ? 0 : cur);
      }, 0);
  }

  // custom delimiters if the string starts with '//'
  if (str.startsWith('//')) {
    const delimiter = str[2]; // Extract the custom delimiter
    str = str.slice(4).split(delimiter).join(','); // Replace custom delimiter with a comma
  }

  // Sum up all valid numbers
  return str.split(',').reduce((acc, cur) => {
    return acc + (isNaN(Number(cur)) ? 0 : Number(cur));
  }, 0);
};
