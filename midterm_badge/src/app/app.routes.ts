import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { About } from './about/about';
import { ServicesComponent } from './services/services';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: About },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
