function createElement(elementType, classes, content = "") {
  const element = document.createElement(elementType);
  classes.forEach((className) => {
    element.classList.add(className);
  });
  if (content) {
    element.innerHTML = content;
  }
  return element;
}

export default createElement;
