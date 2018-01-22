import { Component } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

/**
 * Component for calculator app
 */
@Component({
  selector: 'app-calc',
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

  constructor(private calculatorService: CalculatorService) { }

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
    this.resultDisplay = this.calculatorService.performOperation(this.operator, this.resultDisplay, input);
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
