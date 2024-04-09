import { changeSign } from "./helpers";

class CalculatorModel {
  constructor() {
    this.operatorsToHide = ["AC", "=", "+/-"];
    this.separator = " ";
    this.clearPanel();
  }

  setNumber(value, type = "first") {
    const name = `${type}Number`;

    let newValue = this[name];

    if (newValue !== null && newValue !== "0") {
      newValue += value;
    } else {
      newValue = value;
    }

    if (!Number.isNaN(+newValue)) {
      this[name] = newValue;
    }
  }

  getNumber(type = "first") {
    return Number(this[`${type}Number`]);
  }

  makeCalculation(operator) {
    let first = this.getNumber("first");
    const second = this.getNumber("second");

    if (this.result) {
      this.firstNumber = this.result;
      first = this.result;
      this.result = null;
    }

    if (operator === "AC") {
      this.clearPanel(false);
      return;
    }

    if (operator === "+/-") {
      if (this.secondNumber !== null) {
        this.secondNumber = changeSign(this.secondNumber);
      } else {
        this.firstNumber = changeSign(this.firstNumber);
      }
      return;
    }

    if (operator === "%") {
      if (this.secondNumber !== null) {
        this.secondNumber = +Number(
          (this.firstNumber / 100) * this.secondNumber
        ).toFixed(12);
      }

      return;
    }
    const prevOperator = this.operator;
    const prevResult = this.result;
    this.operator = operator;

    if (this.secondNumber === null) {
      return;
    }

    let result;
    switch (prevOperator) {
      case "+":
        result = first + second;
        break;
      case "-":
        result = first - second;
        break;
      case "÷":
        result = first / second;
        break;
      case "×":
        result = first * second;
        break;
      case "=": {
        this.makeCalculation(prevOperator);
        return;
      }
      default: {
        return;
      }
    }
    this.result = +result.toFixed(12);

    if (Number.isNaN(this.result)) {
      this.result = prevResult;
    }
    this.clearPanel(true);
    this.operator = operator;
  }

  clearPanel(isSaveResult = false) {
    this.firstNumber = "0";
    this.operator = "";
    this.secondNumber = null;
    this.result = isSaveResult ? this.result : null;
  }

  toString() {
    let items;
    if (this.result === null) {
      items = [this.firstNumber, this.operator, this.secondNumber];
    } else {
      items = [this.result, this.operator];
    }
    return items
      .filter(
        (el) =>
          el !== null &&
          el !== "" &&
          !this.operatorsToHide.some((operator) => operator === el)
      )
      .join(this.separator);
  }
}

export default CalculatorModel;
