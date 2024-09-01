export const getSlicedString = (str: string): string => {
  return str.slice(0, 3);
};

const myString = 'JavaScript Workshop Activity in WebDev 2';

const slicedChar = getSlicedString(myString);

console.log(slicedChar);
