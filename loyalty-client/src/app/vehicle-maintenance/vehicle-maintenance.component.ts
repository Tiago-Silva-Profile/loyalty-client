import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-maintenance',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './vehicle-maintenance.component.html',
  styleUrl: './vehicle-maintenance.component.css'
})
export class VehicleMaintenanceComponent {

}
