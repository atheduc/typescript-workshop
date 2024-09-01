console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = {am: 'I tabbed?'};

const iWish = "I didn't have a trailing space...";

const sicilian = true;

const vizzini = sicilian ? !sicilian : sicilian;

const re = /foo\s{3}bar/; // Adjust based on actual spacing intention

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  if (andThose.length === 0) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  console.log(longString, trailing, why, iWish, vizzini, re);
  return;
}

import {filterLongWords} from './filter';
import {thriceTheNum} from './map';
import {getSlicedString} from './slice';
import {logFruits} from './foreach';

const words = ['Berry', 'Banana', 'Mango', 'Dragon Fruit'];
const numbers = [1, 2, 3, 4, 5];
const myString = 'JavaScript Workshop Activity in WebDev 2';
const fruits = ['Berry', 'Banana', 'Mango', 'Dragon Fruit'];

const filteredLongWords = filterLongWords(words);
console.log('Filtered Long Words:', filteredLongWords);

const thriceTheNumbers = thriceTheNum(numbers);
console.log('Thrice The Numbers:', thriceTheNumbers);

const slicedChar = getSlicedString(myString);
console.log('Sliced Characters:', slicedChar);

logFruits(fruits);
