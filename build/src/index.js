'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.doSomeStuff = doSomeStuff;
console.log('Try npm run lint/fix!');
const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
const trailing = 'Semicolon';
const why = {am: 'I tabbed?'};
const iWish = "I didn't have a trailing space...";
const sicilian = true;
const vizzini = sicilian ? !sicilian : sicilian;
const re = /foo\s{3}bar/; // Adjust based on actual spacing intention
function doSomeStuff(withThis, andThat, andThose) {
  if (andThose.length === 0) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  console.log(longString, trailing, why, iWish, vizzini, re);
  return;
}
const filter_1 = require('./filter');
const map_1 = require('./map');
const slice_1 = require('./slice');
const foreach_1 = require('./foreach');
const words = ['Berry', 'Banana', 'Mango', 'Dragon Fruit'];
const numbers = [1, 2, 3, 4, 5];
const myString = 'JavaScript Workshop Activity in WebDev 2';
const fruits = ['Berry', 'Banana', 'Mango', 'Dragon Fruit'];
const filteredLongWords = (0, filter_1.filterLongWords)(words);
console.log('Filtered Long Words:', filteredLongWords);
const thriceTheNumbers = (0, map_1.thriceTheNum)(numbers);
console.log('Thrice The Numbers:', thriceTheNumbers);
const slicedChar = (0, slice_1.getSlicedString)(myString);
console.log('Sliced Characters:', slicedChar);
(0, foreach_1.logFruits)(fruits);
//# sourceMappingURL=index.js.map
