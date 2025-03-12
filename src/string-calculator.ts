export const add = (n: string): number => {
  if (!n) return 0;

  let str = n.replace(/\n/g, ',');

  const number = str.split(',').map((num) => Number(num));
  const hasNegative = number.some((num) => num < 0);
  if (hasNegative) {
    throw new Error(`negative numbers not allowed: ${number.filter((num) => num < 0).join(', ')}`);
  }

  if (number.some((num) => num > 1000)) {
    return number
      .filter((num) => num <= 1000)
      .reduce((acc, cur) => {
        return acc + (isNaN(cur) ? 0 : cur);
      }, 0);
  }

  if (str.startsWith('//')) {
    const delimiter = str[2];
    str = str.slice(4).split(delimiter).join(',');
  }

  return str.split(',').reduce((acc, cur) => {
    return acc + (isNaN(Number(cur)) ? 0 : Number(cur));
  }, 0);
};
