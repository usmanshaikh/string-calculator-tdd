export const add = (n: string): number => {
  if (typeof n === 'string' && n === '') {
    return 0;
  } else {
    return n.split(',').reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);
  }
};
