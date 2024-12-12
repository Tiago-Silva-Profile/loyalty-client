import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehicleMaintenanceComponent } from './vehicle-maintenance/vehicle-maintenance.component';
import { SettingsComponent } from './settings/settings.component';
import { ClientVehicleComponent } from './client-vehicle/client-vehicle.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: VehicleMaintenanceComponent },
  { path: 'config', component: SettingsComponent },
  { path: 'client', component: ClientVehicleComponent},

];
