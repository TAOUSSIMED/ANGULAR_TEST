import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vehicle } from './vehicle';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  displayedColumns: string[] = ['id', 'registrationNumber', 'brand', 'currentKm'];

 

  dataSource !: MatTableDataSource<Vehicle>;

  constructor(private vehicleservice : VehicleService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.vehicleservice.getvehicles());
  }

}
