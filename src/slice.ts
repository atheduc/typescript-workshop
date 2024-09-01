export const getSlicedString = (str: string): string => {
  return str.slice(0, 3);
};

const myString: string = 'JavaScript Workshop Activity in WebDev 2';

const slicedChar: string = getSlicedString(myString);

console.log(slicedChar);
