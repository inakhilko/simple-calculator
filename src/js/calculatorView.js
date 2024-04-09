import { createElement } from "./helpers";

class CalculatorView {
  constructor() {
    this.calculatorWrapper = document.querySelector(".calculator__wrapper");
    this.defaultTheme = "dark-theme";

    this.keypadTopContent = ["AC", "+/-", "%"];
    this.keypadSideContent = ["÷", "×", "-", "+", "="];
    this.keypadNumbersBlockContent = [
      "7",
      "8",
      "9",
      "4",
      "5",
      "6",
      "1",
      "2",
      "3",
      "0",
      ".",
    ];
    this.createElement = createElement;
  }

  createControls() {
    const controls = this.createElement("div", ["controls"]);
    const controlsExit = this.createElement("button", [
      "control",
      "control__exit",
    ]);
    const controlsMinimize = this.createElement("button", [
      "control",
      "control__minimize",
    ]);
    const controlsMaximize = this.createElement("button", [
      "control",
      "control__maximize",
    ]);
    controls.append(controlsExit, controlsMinimize, controlsMaximize);
    return controls;
  }

  createInputPanel() {
    const inputPanel = this.createElement("div", ["calculator__panel"]);
    const controls = this.createControls();
    const calculatorPanelDisplay = this.createElement("p", [
      "calculator__panel-display",
    ]);
    calculatorPanelDisplay.innerText = "0";
    inputPanel.append(controls, calculatorPanelDisplay);
    return inputPanel;
  }

  createKeypad() {
    const keypad = this.createElement("div", ["keypad"]);
    const keypadMainBlock = this.createElement("div", ["keypad__main-block"]);
    const keypadMainBlockOperations = this.createElement("div", [
      "keypad__main-block-operations",
    ]);
    const keypadMainBlockOperationsElements = this.keypadTopContent.map(
      (content) =>
        this.createElement(
          "button",
          ["keypad__button", "keypad__button--top"],
          content
        )
    );
    keypadMainBlockOperations.append(...keypadMainBlockOperationsElements);

    const keypadMainBlockNumbers = this.createElement("div", [
      "keypad__main-block-numbers",
    ]);
    const keypadMainBlockNumbersElements = this.keypadNumbersBlockContent.map(
      (content) =>
        this.createElement(
          "button",
          ["keypad__button", "keypad__button--numbers"],
          content
        )
    );
    keypadMainBlockNumbers.append(...keypadMainBlockNumbersElements);
    keypadMainBlock.append(keypadMainBlockOperations, keypadMainBlockNumbers);

    const keypadSideBlock = this.createElement("div", ["keypad__side-block"]);
    const keypadSideBlockElements = this.keypadSideContent.map((content) =>
      this.createElement(
        "button",
        ["keypad__button", "keypad__button--side"],
        content
      )
    );
    keypadSideBlock.append(...keypadSideBlockElements);

    keypad.append(keypadMainBlock, keypadSideBlock);
    return keypad;
  }

  changeTheme() {
    if (this.calculatorWrapper.classList.contains("dark-theme")) {
      this.calculatorWrapper.classList.remove("dark-theme");
      this.calculatorWrapper.classList.add("light-theme");
    } else {
      this.calculatorWrapper.classList.remove("light-theme");
      this.calculatorWrapper.classList.add("dark-theme");
    }
  }

  renderCalculator() {
    this.calculatorWrapper.innerHTML = "";
    this.calculatorWrapper.classList.add(this.defaultTheme);
    const themeButton = this.createElement(
      "button",
      ["theme-button"],
      "Change theme"
    );
    themeButton.addEventListener("click", () => {
      this.changeTheme();
    });
    const calculator = this.createElement("div", ["calculator"]);
    const inputPanel = this.createInputPanel();
    const keypad = this.createKeypad();

    calculator.append(inputPanel, keypad);
    this.calculatorWrapper.append(themeButton, calculator);
    this.panelDisplayElement = document.querySelector(
      ".calculator__panel-display"
    );
    this.keypadNumbersBlock = document.querySelector(
      ".keypad__main-block-numbers"
    );
    this.keypadOperationsMainBlock = document.querySelector(
      ".keypad__main-block-operations"
    );
    this.keypadOperationsSideBlock = document.querySelector(
      ".keypad__side-block"
    );
  }
}

export default CalculatorView;
