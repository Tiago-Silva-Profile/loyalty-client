import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehicleMaintenanceComponent } from "./vehicle-maintenance/vehicle-maintenance.component";
import { SidebarMenuComponent } from "./sidebar-menu/sidebar-menu.component";
import { LoginComponent } from "./login/login.component";
import { ClientVehicleComponent } from './client-vehicle/client-vehicle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    VehicleMaintenanceComponent,
    SidebarMenuComponent,
    LoginComponent,
    ClientVehicleComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loyalty-client';
}
