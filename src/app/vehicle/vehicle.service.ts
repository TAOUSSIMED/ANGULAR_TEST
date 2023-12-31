import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicles : Vehicle[] = [
    new Vehicle(0, "GOLF", 13, "M745P2"),
    new Vehicle(1, "Audi", 582, "A44P002"),
    new Vehicle(2, "MERCEDES", 990, "F86D2210")
  ]

  constructor() { }

  getvehicles() : Vehicle[] {
    return this.vehicles;
  }
}
