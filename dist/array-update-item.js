'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Update an item of an array
 *
 * This is a pure function, does not mutate the provided array,
 * instead it returns a new one
 *
 * @param {Array<Any>}  array to update
 * @param {Any}   the item to update item
 * @param {Number?}  position
 * @returns {Array}  modified array
 */
function updateItemInArray(arr, itemToUpdate, index) {
  var inRange = index > -1 && index <= arr.length;
  if (typeof index !== 'number' || index % 1 !== 0 || !inRange) {
    return arr;
  }
  return [].concat(_toConsumableArray(arr.slice(0, index)), [itemToUpdate], _toConsumableArray(arr.slice(index + 1)));
}

module.exports = updateItemInArray;
