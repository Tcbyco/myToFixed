
function myToFixed(number, decimalPlaces) {
  var num = number;
  
  if (num === undefined) {
    return undefined;
  }

  var numString = String(num);
  
  if (arguments.length < 2 || numString === 'NaN') {
    return numString;
  }
  
  // Get current decimal point index. We need this to replace decimal at end.
  var decimalIndex = numString.indexOf('.');

  numString = numString.replace('.', '');
  
  // Move the decimal point to the right by a distance equal to the number of decimal places.
  var shiftedDecimalIndex = decimalIndex + decimalPlaces;
  var beforeDecimal = numString.substring(0, shiftedDecimalIndex);
  var afterDecimal = numString.substring(shiftedDecimalIndex);
  numString = beforeDecimal + '.' + afterDecimal;
  
  // Round the number. This will also delete any preceding zeros.
  numString = String(Math.round(numString));

  // Restore preceding zeros if they existed.
  if (num < 1) {
    zeroCount = decimalIndex;
    numString = '0'.repeat(zeroCount) + numString;
  }
  
  // Move decimal back to original position.
  beforeDecimal = numString.substring(0, decimalIndex);
  afterDecimal = numString.substring(decimalIndex);
  numString = beforeDecimal + '.' + afterDecimal;
  
  return numString;
}