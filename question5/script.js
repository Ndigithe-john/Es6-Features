'use strict';
let color = ['Blue ', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow '];
let o = ['th', 'st', 'nd', 'rd'];
const color_function = function (color, o) {
  for (let i = 0; i < color.length; i++) {
    let suffix;
    if (i + 1 > 3) {
      suffix = o[0];
    } else {
      suffix = o[i + 1];
    }
    console.log(`${i + 1}${suffix} choice is ${color[i]}.`);
  }
};
color_function(color, o);
