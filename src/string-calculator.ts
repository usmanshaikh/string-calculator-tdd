export const add = (n: string): number => {
  if (!n) return 0;

  let str = n.replace(/\n/g, ',');

  return str.split(',').reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);
};
