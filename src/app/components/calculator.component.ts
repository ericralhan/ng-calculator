import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display = '';
  isOpClicked = false;
  result: number;
  strNum = '';
  operator: string;
  operatorAssigned = false;
  resultDisplay: number;

  entered(input) {
    this.strNum += input;
    this.display += input;
    if (this.operatorAssigned) {
      this.calculate(+this.strNum);
      return;
    }
    this.result = +this.strNum;
    this.resultDisplay = this.result;
  }
  operate(input) {
    this.display += input;
    if (this.operatorAssigned) {
      this.result = this.resultDisplay;
    }

    this.operatorAssigned = true;
    this.operator = input;
    this.strNum = '';
    this.isOpClicked = false;
  }
  calculate(input: number) {
    this.resultDisplay = this.result;
    switch (this.operator) {
      case '+': this.resultDisplay += input; break;
      case '-': this.resultDisplay -= input; break;
      case '*': this.resultDisplay *= input; break;
      case '/': this.resultDisplay /= input; break;
      default: alert('Not a valid Operator'); break;
    }
  }
  equalsTo() {
    this.result = this.resultDisplay;
    this.operator = '';
    this.strNum = '';
    this.display = this.result.toString();
  }
  clearAll() {
    this.display = '';
    this.isOpClicked = false;
    this.strNum = '';
    this.operatorAssigned = false;
    this.resultDisplay = 0;
  }

}