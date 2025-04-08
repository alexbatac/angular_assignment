import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/registration-form/form.component';
import { MapComponent } from './pages/map/map.component';
import { ApiDataComponent } from './pages/api-data/api-data.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'api-data', component: ApiDataComponent }, 
  { path: 'map', component: MapComponent }
];
