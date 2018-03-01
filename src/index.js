module.exports = function check(str, bracketsConfig) {
  // your solution
  var result = str;
  for (var j = 0; j < (str.length/2); j++) {
      for (var i = 0; i < bracketsConfig.length; i++) {
          var brackets = bracketsConfig[i].join('');
          result = result.replace(brackets, '');
      }
  }

  return result === '';
}
