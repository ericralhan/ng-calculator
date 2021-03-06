import { Component } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

/**
 * Component for calculator app
 */
@Component({
  selector: 'app-calc',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent {
  private display = '';
  private isOpClicked = false;
  private strNum = '';
  private operatorAssigned = false;
  private operator: string;
  private result: number;

  public constructor(private calculatorService: CalculatorService) {}

  /**
   * This method is called when user inputs operands
   * @param input: operand entered by user
   */
  private entered(input): void {
    this.strNum += input;
    this.display += input;
    if (this.operatorAssigned) {
      this.calculate(+this.strNum);
      return;
    }
    this.result = +this.strNum;
  }

  /**
   * This method is called when user inputs an operator
   * @param input: operator entered by user
   */
  private operate(input): void {
    this.display += input;

    this.operatorAssigned = true;
    this.operator = input;
    this.strNum = '';
    this.isOpClicked = false;
  }

  /**
   * This method is called when an expression can be calculated
   * @param input: second or later operand entered by user
   */
  private calculate(input: number): void {
    this.result = this.calculatorService.performOperation(
      this.operator,
      this.result,
      input
    );
  }

  /**
   * This method assigns result to display, when equalsTo operator is clicked
   */
  private equalsTo(): void {
    this.operator = '';
    this.strNum = '';
    this.display = this.result.toString();
  }

  /**
   * This method clears the calculator, when Cancel is clicked
   */
  private clearAll(): void {
    this.display = '';
    this.isOpClicked = false;
    this.strNum = '';
    this.operatorAssigned = false;
    this.result = 0;
  }
}
