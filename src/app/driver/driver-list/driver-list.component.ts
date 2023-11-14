import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Vehicle } from 'src/app/vehicle/vehicle';
import { VehicleService } from 'src/app/vehicle/vehicle.service';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent {

  @Output() driverSelected = new EventEmitter<Driver>();




  drivers : Driver[] = this.driverService.getdrivers();
    
  constructor(private sanitizer: DomSanitizer , private driverService : DriverService) { 
    
  }

  getImgContent(img: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }
  ondriverselected(driver : Driver)
  {
    this.driverSelected.emit(driver);
  }
}
