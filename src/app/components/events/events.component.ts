import { Component } from '@angular/core';
import { EventModel } from '../../models/events';
import { EventsApiService } from '../../services/events-api.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

constructor(private _EventService:EventsApiService){}

AllEvents: EventModel[] = [];

ngOnInit(){
this.getAll();

}


getAll(){

this._EventService.getAllEvents().subscribe((response:EventModel[]) => 
  {console.log(response);
  this.AllEvents = response;})

}




}
