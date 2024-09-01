'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.getSlicedString = void 0;
const getSlicedString = str => {
  return str.slice(0, 3);
};
exports.getSlicedString = getSlicedString;
const myString = 'JavaScript Workshop Activity in WebDev 2';
const slicedChar = (0, exports.getSlicedString)(myString);
console.log(slicedChar);
//# sourceMappingURL=slice.js.map
