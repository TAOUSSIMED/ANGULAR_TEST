import { Component, Input } from '@angular/core';
import { Vehicle } from 'src/app/vehicle/vehicle';
import { VehicleService } from 'src/app/vehicle/vehicle.service';
import { Driver } from '../driver';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent {

@Input() driver !: Driver

vehicles: Vehicle[] = [];

constructor(private vehicleservice : VehicleService) { }

ngOnInit(): void {
  this.vehicles = this.vehicleservice.getvehicles();
}


}
