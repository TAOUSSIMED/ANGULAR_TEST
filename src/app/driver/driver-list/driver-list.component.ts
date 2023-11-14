import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Vehicle } from 'src/app/vehicle/vehicle';
import { Driver } from '../driver';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent {

  vehicles : Vehicle[] = [
    new Vehicle(0, "GOLF", 13, "M745P2"),
    new Vehicle(1, "Audi", 582, "A44P002"),
    new Vehicle(2, "MERCEDES", 990, "F86D2210")
  ]


  drivers : Driver[] = [
    new Driver(0,"TAOUSSI", "MO", this.vehicles[0], "assets/Drivers/driver0.png"),
    new Driver(1,"MOHAMED", "TA", this.vehicles[2], "assets/Drivers/driver1.png"),
    new Driver(2,"SIMO", "TA", this.vehicles[1], "assets/Drivers/driver2.png")
  ]
  constructor(private sanitizer: DomSanitizer) { }

  getImgContent(img: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }
}