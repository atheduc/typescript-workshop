export const filterLongWords = (words: string[]): string[] => {
  return words.filter((word: string) => word.length > 5);
};

const words: string[] = ['Berry', 'Banana', 'Mango', 'Dragon Fruit'];
const filteredLongWords: string[] = filterLongWords(words);
console.log(filteredLongWords);
