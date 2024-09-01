export const logFruits = (fruits: string[]): void => {
  fruits.forEach((fruit: string) => {
    console.log(fruit);
  });
};

const fruits: string[] = ['Berry', 'Banana', 'Mango', 'Dragon Fruit'];

logFruits(fruits);
