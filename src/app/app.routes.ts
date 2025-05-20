import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArquitecturaComponent } from './components/arquitectura/arquitectura.component';

export const routes: Routes = [
    { path: 'navbar', component: NavbarComponent },
    { path: 'footer', component: FooterComponent },
    {path: 'arquitectura', component: ArquitecturaComponent},
    
];
