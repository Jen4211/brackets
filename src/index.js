module.exports = function check(str, bracketsConfig) {
  let isDeleteElement = true;
  while (str.length > 0 && isDeleteElement) {
    isDeleteElement = false;
    for (let i = 0; i < bracketsConfig.length; i++) {
      let brackets = bracketsConfig[i].join('');
      while (str.length > 0 && str.includes(brackets)) {
        isDeleteElement = true;
        str = str.replaceAll(brackets, '');
      }
    }
  }
  if (str.length > 0) {
    return false;
  } else {
    return true;
  }





}
