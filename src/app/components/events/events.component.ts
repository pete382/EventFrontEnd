import { Component } from '@angular/core';
import { EventModel } from '../../models/events';
import { EventsApiService } from '../../services/events-api.service';
import { EventFormComponent } from '../event-form/event-form.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FavoriteModel } from '../../models/favorites';
import { FavoriteService } from '../../services/favorite.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventFormComponent,FormsModule, RouterLink],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

constructor(private _EventService:EventsApiService, private _favoriteService:FavoriteService, private socialAuthServiceConfig: SocialAuthService){}
user:SocialUser = {} as SocialUser;
loggedIn: boolean = false;

AllEvents: EventModel[] = [];
allFavorites:FavoriteModel[] = [];

ngOnInit() {
  //authState is a custom observable that will run again any time changes are noticed.
  this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
    this.user = userResponse;
    //if login fails, it will return null.
    this.loggedIn = (userResponse != null);
    console.log(this.user);
    this.getAll();
  });
}


getAll(){
  this._EventService.getAllEvents().subscribe((response:EventModel[]) => 
    {console.log(response);
    this.AllEvents = response;})
}


addEvent(e:EventModel){
  this._EventService.AddEvent(e).subscribe((response:EventModel)=>{
    this.getAll();
  })
}

DeleteEvent(e:EventModel){
  this._EventService.deleteEvent(e.id).subscribe((response)=>{
    this.getAll();
  })
}


getFavoritesById(id:string){
  this._favoriteService.getAll(id).subscribe((response:FavoriteModel[])=>
  this.allFavorites = response)
}

addNewFavorite(e:EventModel, id:string){
  let newfavorite = {} as FavoriteModel;
  newfavorite.id = 0;
  newfavorite.currentuserid = this.user.id;
  newfavorite.currentusername = this.user.name;
  newfavorite.eventid = e.id
  this._favoriteService.addFavorite(newfavorite).subscribe((response:FavoriteModel)=>{
    this.getFavoritesById(id)
  })
}

deleteFavorite(f:FavoriteModel, id:string){
  this._favoriteService.deleteFavorite(f.id).subscribe((response:void)=>{
    this.getFavoritesById(id);
  })
}

deleteUserEvent(e:EventModel):boolean{
  return e.userid == this.user.id;
}


}
