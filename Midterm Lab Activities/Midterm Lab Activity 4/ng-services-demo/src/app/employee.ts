import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  getEmployee() {
    return [
  {
    id: 'P-101',
    firstname: 'Logitech Mouse',
    lastname: '6 Button Mechanical Mouse',
    email: 899.00,
  },
  {
    id: 'P-102',
    firstname: 'JBL BT Speaker',
    lastname: 'Waterproof Radio 360 Surround',
    email: 1099.00,
  },
  {
  id: 'P-103',
    firstname: 'Mechanical Keyboard',
    lastname: 'Hot-swappable RGB Backlit',
    email: 2395.00,
  },
  {
  id: 'P-104',
    firstname: 'Oculus Meta',
    lastname: 'All-in-one Gaming Headset',
    email: 22450.00,
  },
]
  }
}
