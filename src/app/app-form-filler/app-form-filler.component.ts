import { Component } from '@angular/core';
import { Vehicle } from './car.model';
@Component({
  selector: 'app-app-form-filler',
  templateUrl: './app-form-filler.component.html',
  styleUrls: ['./app-form-filler.component.css']
})
export class AppFormFillerComponent {
  public vehicleObj:Vehicle = new Vehicle();
  onBtnClick(){
    console.log(this.vehicleObj)
  }
}
