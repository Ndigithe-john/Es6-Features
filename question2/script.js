'use strict';
// Write a JavaScript program to check whether a given number is in a given range. e.g. 60, rage 50-100 returns true
function checkInRange(num, range) {
  let [min, max] = range.split('-');
  return num >= Number(min) && num <= Number(max);
}
checkInRange(80, 50 - 60);
