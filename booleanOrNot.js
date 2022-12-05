// // Write a JavaScript function to validate whether a given value type is boolean or not
function Bool(x) {
  if (x == 1 || x == 0) {
    return ("true")
  }
  else {
    return ("false")
  }
}
console.log(Bool(true))
console.log(Bool(1))
console.log(Bool(2))
console.log(Bool(5))
console.log(Bool('bar'))



function is_boolean(value)
        {
        return value === true || value === false || toString.call(value) === '[object Boolean]';
       }

console.log(is_boolean(true));
console.log(is_boolean(1));
console.log(is_boolean(2));

console.log(is_boolean('bar'));
