export const thriceTheNum = (numbers: number[]): number[] => {
  return numbers.map((number: number) => number * 3);
};

const numbers: number[] = [1, 2, 3, 4, 5];

const thriceTheNumbers: number[] = thriceTheNum(numbers);

console.log(thriceTheNumbers);
