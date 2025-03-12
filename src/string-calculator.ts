export const add = (n: string): number => {
  if (!n) return 0;

  let str = n.replace(/\n/g, ',');

  const hasNegative = str.split(',').some((num) => Number(num) < 0);
  if (hasNegative) {
    throw new Error(
      `negative numbers not allowed: ${str
        .split(',')
        .filter((num) => Number(num) < 0)
        .join(', ')}`,
    );
  }

  if (str.split(',').some((num) => Number(num) > 1000)) {
    return str
      .split(',')
      .filter((num) => Number(num) <= 1000)
      .reduce((acc, cur) => {
        return acc + (isNaN(Number(cur)) ? 0 : Number(cur));
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
