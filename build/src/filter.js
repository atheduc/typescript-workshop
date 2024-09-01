'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.filterLongWords = void 0;
const filterLongWords = words => {
  return words.filter(word => word.length > 5);
};
exports.filterLongWords = filterLongWords;
const words = ['Berry', 'Banana', 'Mango', 'Dragon Fruit'];
const filteredLongWords = (0, exports.filterLongWords)(words);
console.log(filteredLongWords);
//# sourceMappingURL=filter.js.map
