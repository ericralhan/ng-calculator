import { Injectable } from '@angular/core';

/**
 * Service for calculator operations.
 */
@Injectable()
export class CalculatorService {

    /**
     * Execute the provided expression.
     */
    public performOperation(operator: string, l: number, r: number): number {
        switch (operator) {
            case '+': l += r; break;
            case '-': l -= r; break;
            case '*': l *= r; break;
            case '/': l /= r; break;
            default: alert('Not a valid Operator'); break;
        }
        return l;
    }
}
