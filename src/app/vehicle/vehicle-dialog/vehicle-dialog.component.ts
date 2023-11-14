import { Component } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-dialog',
  templateUrl: './vehicle-dialog.component.html',
  styleUrls: ['./vehicle-dialog.component.css']
})
export class VehicleDialogComponent {
  vehicles : Vehicle[] = [
    new Vehicle(0, "GOLF", 13, "M745P2"),
    new Vehicle(1, "Audi", 582, "A44P002"),
    new Vehicle(2, "MERCEDES", 990, "F86D2210")
  ]

}
