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
  const inRange = index > -1 && index <= arr.length
  if (typeof index !== 'number' || index % 1 !== 0 || !inRange) {
    return arr
  }
  return [
    ...arr.slice(0, index),
    itemToUpdate,
    ...arr.slice(index + 1)
  ]
}

module.exports = updateItemInArray
