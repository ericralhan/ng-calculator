import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatCardModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));
  it(`display should be blank at the start`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.display).toEqual('');
  }));
  it(`display should change as per the entered value`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.entered('1+3+4+5');

    expect(app.display).toEqual('1+3+4+5');
  }));
  it(`operate feature should be applied`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.operate('+');

    expect(app.display).toEqual('+');
  }));
  it(`calculate feature should be applied to add numbers`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.entered(15);
    app.operate('+');
    app.calculate(11);

    expect(app.resultDisplay).toEqual(26);
  }));
  it(`calculate feature should be applied to subtract numbers`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.entered(15);
    app.operate('-');
    app.calculate(11);

    expect(app.resultDisplay).toEqual(4);
  }));
  it(`calculate feature should be applied to mulitply numbers`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.entered(15);
    app.operate('*');
    app.calculate(11);

    expect(app.resultDisplay).toEqual(165);
  }));
  it(`calculate feature should be applied to divide numbers`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.entered(15);
    app.operate('/');
    app.calculate(5);

    expect(app.resultDisplay).toEqual(3);
  }));
  it(`equals feature should disply the result`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.entered(15);
    app.operate('/');
    app.calculate(5);
    app.equalsTo();

    expect(app.resultDisplay).toEqual(3);
    expect(app.result).toEqual(3);
    expect(app.strNum).toEqual('');
    expect(app.operator).toEqual('');
  }));
  it(`clearAll feature should reset the app`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.entered(15);
    app.operate('/');
    app.calculate(5);
    app.equalsTo();
    app.clearAll();

    expect(app.display).toEqual('');
    expect(app.isOpClicked).toEqual(false);
    expect(app.strNum).toEqual('');
    expect(app.operatorAssigned).toEqual(false);
    expect(app.resultDisplay).toEqual(0);
  }));
  it(`entered feature calculates the result if operator is already assigned`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.entered(15);
    app.operate('/');
    app.entered(5);

    expect(app.resultDisplay).toEqual(3);
    expect(app.display).toEqual('15/5');
    expect(app.isOpClicked).toEqual(false);
    expect(app.operatorAssigned).toEqual(true);
  }));
  it(`operate feature assigns result if operator is already assigned`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.entered(15);
    app.operate('/');
    app.entered(5);
    app.operate('+');

    expect(app.resultDisplay).toEqual(3);
    expect(app.result).toEqual(3);
    expect(app.display).toEqual('15/5+');
    expect(app.isOpClicked).toEqual(false);
    expect(app.operatorAssigned).toEqual(true);
  }));
  it(`calculate feature displays alert for not a valid operator`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    spyOn(window, 'alert');
    app.entered(15);
    app.operate('?');
    app.calculate(3);

    expect(app.display).toEqual('15?');
    expect(window.alert).toHaveBeenCalledWith('Not a valid Operator');
  }));
});
