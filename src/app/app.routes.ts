import { Routes } from '@angular/router';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'aviso-legal', component: AvisoLegalComponent},
    {path: 'politica-privacidad', component: PoliticaPrivacidadComponent},
    // {path: 'servicios', component: ServicesComponent},
    // {path: 'contacto', component: ContactComponent}
];
