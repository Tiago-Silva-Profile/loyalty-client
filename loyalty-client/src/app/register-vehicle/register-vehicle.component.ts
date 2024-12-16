import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-vehicle',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './register-vehicle.component.html',
  styleUrl: './register-vehicle.component.css'
})
export class RegisterVehicleComponent {

}
