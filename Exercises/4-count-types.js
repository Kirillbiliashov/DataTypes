'use strict';

const countTypesInArray = array => {
  const types = {};
  for (const elem of array) {
  const type = typeof elem;
  const count = types[type] || 0;
  types[type] = count + 1;
 }
  return types;
};

const array = [true, true, true];
console.dir(countTypesInArray(array));
module.exports = { countTypesInArray };
