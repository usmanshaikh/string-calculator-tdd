export const add = (n: string): number => {
  // Return 0 if the input string is empty
  if (!n) return 0;

  // Custom delimiters
  if (n.startsWith('//')) {
    let delimiterEndIndex = n.indexOf('\n'); // Find end of delimiter section
    let delimiterSection = n.slice(2, delimiterEndIndex); // Extract delimiter section

    let delimiters: string[] = [];
    if (delimiterSection.startsWith('[') && delimiterSection.endsWith(']')) {
      // Multiple delimiters
      delimiterSection = delimiterSection.slice(1, -1); // Remove outer brackets
      delimiters = delimiterSection.split('][');
    } else {
      // Single delimiter
      delimiters = [delimiterSection];
    }

    n = n.slice(delimiterEndIndex + 1);
    delimiters.map((delimiter) => (n = n.split(delimiter).join(',')));
  }

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

  // Sum up all valid numbers
  return str.split(',').reduce((acc, cur) => {
    return acc + (isNaN(Number(cur)) ? 0 : Number(cur));
  }, 0);
};
