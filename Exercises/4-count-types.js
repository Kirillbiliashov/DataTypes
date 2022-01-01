'use strict';

const countTypesInArray = array => {
  const types = {};
  for (const elem of array) {
  const type = typeof elem;
  let count = types[type] || 0;
  types[type] = ++count;
 }
  return types;
};

const array = [true, true, true];

console.dir({types: countTypesInArray(array)});

module.exports = { countTypesInArray };
