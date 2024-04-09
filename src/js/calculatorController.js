import CalculatorView from "./calculatorView";
import CalculatorModel from "./calculatorModel";

class CalculatorController {
  constructor() {
    this.view = new CalculatorView();
    this.model = new CalculatorModel();
  }

  handleNumberClick(event) {
    this.view.panelDisplayElement.innerText =
      this.view.panelDisplayElement.innerText === "0"
        ? event.target.innerText
        : (this.view.panelDisplayElement.innerText += event.target.innerText);

    const clickedNumber = event.target.innerText;

    if (
      this.model.operator &&
      this.model.operatorsToHide.every((oper) => oper !== this.model.operator)
    ) {
      if (this.model.result !== null) {
        this.model.setNumber(this.model.result, "first");
      }
      this.model.setNumber(clickedNumber, "second");
    } else {
      this.model.setNumber(clickedNumber, "first");
    }
    this.model.result = null;
    this.updatePage();
  }

  handleOperationClick(event) {
    this.model.makeCalculation(event.target.innerText);
    this.updatePage();
  }

  renderCalculator() {
    this.view.renderCalculator();
    this.view.keypadNumbersBlock.addEventListener("click", (event) =>
      this.handleNumberClick(event)
    );
    this.view.keypadOperationsSideBlock.addEventListener("click", (event) => {
      this.handleOperationClick(event);
    });
    this.view.keypadOperationsMainBlock.addEventListener("click", (event) => {
      this.handleOperationClick(event);
    });
  }

  updatePage() {
    this.view.panelDisplayElement.innerText = this.model;
  }
}

export default CalculatorController;
