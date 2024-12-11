import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehicleMaintenanceComponent } from './vehicle-maintenance/vehicle-maintenance.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: VehicleMaintenanceComponent },
  { path: 'config', component: SettingsComponent },

];
