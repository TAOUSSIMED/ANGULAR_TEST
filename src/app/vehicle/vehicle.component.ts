import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vehicle } from './vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  displayedColumns: string[] = ['id', 'registrationNumber', 'brand', 'currentKm'];

  vehicles : Vehicle[] = [
    new Vehicle(0, "GOLF", 13, "M745P2"),
    new Vehicle(1, "Audi", 582, "A44P002"),
    new Vehicle(2, "MERCEDES", 990, "F86D2210")
  ]

  dataSource !: MatTableDataSource<Vehicle>;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.vehicles);
  }

}
