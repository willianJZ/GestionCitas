import { Routes } from '@angular/router';

import { ViewLoginComponent } from './vistas/view-login/view-login.component';
import { ViewRegistroComponent } from './vistas/view-registro/view-registro.component';
import { ViewHorariosComponent } from './vistas/view-horarios/view-horarios.component';
import { ViewDoctorsComponent } from './vistas/view-doctors/view-doctors.component';
import { ViewDashboardComponent } from './vistas/view-dashboard/view-dashboard.component';
import { ViewCitasComponent } from './vistas/view-citas/view-citas.component';
import { ViewDetalleDocComponent } from './vistas/view-detalle-doc/view-detalle-doc.component';

export const routes: Routes = [
    { path: 'login', component: ViewLoginComponent },
    { path: 'registro', component: ViewRegistroComponent },
    { path: 'horarios', component: ViewHorariosComponent },
    { path: 'doctors', component: ViewDoctorsComponent },
    { path: '', component: ViewDashboardComponent },
    { path: 'citas', component: ViewCitasComponent },
    { path: 'detalle-doc', component: ViewDetalleDocComponent },
    { path: 'detalle-doc/:id', component: ViewDetalleDocComponent },
];
