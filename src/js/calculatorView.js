import createElement from "./helpers";

class CalculatorView {
  constructor() {
    this.calculatorWrapper = document.querySelector(".calculator__wrapper");

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
    const calculatorInput = this.createElement("input", [
      "calculator__panel-input",
    ]);
    inputPanel.append(controls, calculatorInput);
    return inputPanel;
  }

  createKeypad() {
    const keypad = this.createElement("div", ["keypad"]);
    const keypadMainBlock = this.createElement("div", ["keypad__main-block"]);
    const keypadMainBlockControls = this.createElement("div", [
      "keypad__main-block-controls",
    ]);
    const keypadMainBlockControlsElements = this.keypadTopContent.map(
      (content) =>
        this.createElement(
          "button",
          ["keypad__button", "keypad__button--top"],
          content
        )
    );
    keypadMainBlockControls.append(...keypadMainBlockControlsElements);

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
    keypadMainBlock.append(keypadMainBlockControls, keypadMainBlockNumbers);

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

  renderCalculator() {
    this.calculatorWrapper.innerHTML = "";
    const calculator = this.createElement("div", ["calculator"]);
    const inputPanel = this.createInputPanel();
    const keypad = this.createKeypad();

    calculator.append(inputPanel, keypad);
    this.calculatorWrapper.append(calculator);
  }
}

export default CalculatorView;
