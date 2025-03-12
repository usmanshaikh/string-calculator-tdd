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

  return str.split(',').reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);
};
