import test from 'ava'
import deepFreeze from 'deep-freeze-strict'

import updateItemInArray from '../'

const arr = ['a', 'z', 'c', 'd', 'e']
deepFreeze(arr)

test('returns a new array with the item updated', t => {
  const expected = ['a', 'b', 'c', 'd', 'e']
  const actual = updateItemInArray(arr, 'b', 1)
  t.deepEqual(actual, expected)
})

test('update the first item', t => {
  const expected = ['b', 'z', 'c', 'd', 'e']
  const actual = updateItemInArray(arr, 'b', 0)
  t.deepEqual(actual, expected)
})

test('update the last item', t => {
  const expected = ['a', 'z', 'c', 'd', 'b']
  const actual = updateItemInArray(arr, 'b', arr.length - 1)
  t.deepEqual(actual, expected)
})

test('return the same array when the index is out of range', t => {
  const expected = arr
  let actual = updateItemInArray(arr, 'b', -2)
  t.deepEqual(actual, expected)

  actual = updateItemInArray(arr, 'b', 10)
  t.deepEqual(actual, expected)

  actual = updateItemInArray(arr, 'b', 1.23)
  t.deepEqual(actual, expected)
})

test('return the same array when the index is not a number', t => {
  const expected = arr
  const actual = updateItemInArray(arr, 'b', 'b')
  t.deepEqual(actual, expected)
})
