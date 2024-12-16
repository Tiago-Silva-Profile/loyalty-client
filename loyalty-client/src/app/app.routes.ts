import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehicleMaintenanceComponent } from './vehicle-maintenance/vehicle-maintenance.component';
import { SettingsComponent } from './settings/settings.component';
import { ClientVehicleComponent } from './client-vehicle/client-vehicle.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register-service', component: VehicleMaintenanceComponent },
  { path: 'register-driver', component: RegisterVehicleComponent },
  { path: 'config', component: SettingsComponent },
  { path: 'client', component: ClientVehicleComponent},
  { path: 'search', component:SearchComponent}
];
