import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehicleMaintenanceComponent } from "./vehicle-maintenance/vehicle-maintenance.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    VehicleMaintenanceComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loyalty-client';
}
