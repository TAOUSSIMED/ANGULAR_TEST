import { Injectable } from '@angular/core';
import { VehicleService } from '../vehicle/vehicle.service';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  drivers : Driver[] = [
    new Driver(0,"tAOUSSI", "mO", this.vehicleService.getvehicles()[0], "assets/Drivers/driver0.png"),
    new Driver(1,"mOHAMED", "tA", this.vehicleService.getvehicles()[1], "assets/Drivers/driver1.png"),
    new Driver(2,"sIMO", "tA", this.vehicleService.getvehicles()[2], "assets/Drivers/driver2.png")
  ]

  constructor(private vehicleService : VehicleService) { }

   getdrivers() : Driver[] {
    return this.drivers;
  }

}
