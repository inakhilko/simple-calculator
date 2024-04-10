export function createElement(elementType, classes, content = "") {
  const element = document.createElement(elementType);
  classes.forEach((className) => {
    element.classList.add(className);
  });
  if (content) {
    element.innerHTML = content;
  }
  return element;
}

export function changeSign(stringNumber) {
  const numbers = stringNumber
    .split("")
    .filter((el) => !(el === "+" || el === "-"));

  const num = +stringNumber;
  return (num > 0 ? "-" : "") + numbers.join("");
}
