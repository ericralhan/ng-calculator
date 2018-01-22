import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { CalculatorComponent } from './components/calculator.component';
import { CalculatorService } from './services/calculator.service';

@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [CalculatorService],
  bootstrap: [CalculatorComponent]
})
export class AppModule { }
