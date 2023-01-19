const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
   
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
      this.clear();
    }

    chooseOperation(operation) {
        this.operation = operation;

        this.previousOperand = `${this.currentOperand} ${this.operation}`
        this.currentOperand = "";
    }


    // função para digitar os números
    appendNumbeer(number) {
        if (this.currentOperand.includes('.') && number === '.') return;
        this.currentOperand = `${this.currentOperand}${number.toString()}`
    }

    //limpa o valor das variaveis
    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    // atualiza os dados digitados na tela
    updtadeDisplay() {
        this.previousOperandTextElement.innerText = this.previousOperand;
        this.currentOperandTextElement.innerText = this.currentOperand;
    }

}

//instaciando o objeto e chamando as funções

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// passa o valor do parâmetro do número digitado para o appendNumber
for (const numberButton of numberButtons) {
    numberButton.addEventListener('click', () => {
        calculator.appendNumbeer(numberButton.innerText);
        calculator.updtadeDisplay();
    })
}

for (const operationButton of operationButtons) {
    operationButton.addEventListener('click', () => {
        calculator.chooseOperation(operationButton.innerText)
        calculator.updtadeDisplay();
    })
}

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updtadeDisplay();
});
