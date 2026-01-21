import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { DecimalPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DecimalPipe, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-services-demo');
  public employees: {
    id: string,
    firstname: string,
    lastname: string,
    email: number,
  }[] = [];

  constructor(
    private _employeeService: Employee
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }
}
