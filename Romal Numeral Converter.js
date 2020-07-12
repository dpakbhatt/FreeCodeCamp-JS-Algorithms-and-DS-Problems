function convertToRoman(num) {
  var roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var result = "";

  while(num >= 4000) {
    result += "M";
    num -= 1000;
  }

  for(var i = arabic.length - 1; num > 0; i--) {
    while(num >= arabic[i]) {
      result += roman[i];
      num -= arabic[i];
    }
  }

  return result;
}

convertToRoman(36);
