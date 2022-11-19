// -------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------- FOR/ WHILE EXAMPLE ----------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------

// function Romanize(num) {
//   var numeral = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, roman = '', i;
//   for (i in numeral) {
//     while (num >= numeral[i]) {
//       roman += i;
//       num -= numeral[i];
//     }
//   }
//   return roman;
// }

// console.log(Romanize(1));
// console.log(Romanize(2));
// console.log(Romanize(14));
// console.log(Romanize(19));
// console.log(Romanize(19));

// -------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------- SIMPLE FOR EXAMPLE ----------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------


var romanToInt = function (string) {

  const numeral = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0;

  for (i = 0; i < string.length; i++) {
    const cur = numeral[string[i]];
    const next = numeral[string[i + 1]];

    if (cur < next) {
      result += next - cur // IV -> 5 - 1 = 4
      i++
    } 
    else {
      result += cur
    }
  }

  return result;
};

console.log(romanToInt("II"));
console.log(romanToInt("VI"));
// console.log(romanToInt("IV"));
// console.log(romanToInt("XX"));
// console.log(romanToInt("XIX"));


