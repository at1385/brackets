module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) return false;

  const openedBrackets = [];
  bracketsConfig.forEach((item) => openedBrackets.push(item[0]));

  const openedBracketToClosed = Object.fromEntries(bracketsConfig);

  const stack = [];

  for (let char of str) {
    if ((openedBracketToClosed[stack[stack.length - 1]]) === char) {
      stack.pop();
    } else if (openedBrackets.includes(char)) {
      stack.push(char);
    }
  }

  return !stack.length;
}
