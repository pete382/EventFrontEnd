import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';

export const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: ':id', component: EventDetailsComponent },
];
