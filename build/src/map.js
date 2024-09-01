'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.thriceTheNum = void 0;
const thriceTheNum = numbers => {
  return numbers.map(number => number * 3);
};
exports.thriceTheNum = thriceTheNum;
const numbers = [1, 2, 3, 4, 5];
const thriceTheNumbers = (0, exports.thriceTheNum)(numbers);
console.log(thriceTheNumbers);
//# sourceMappingURL=map.js.map
