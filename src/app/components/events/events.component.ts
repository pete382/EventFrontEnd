import { Component } from '@angular/core';
import { EventModel } from '../../models/events';
import { EventsApiService } from '../../services/events-api.service';
import { EventFormComponent } from '../event-form/event-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventFormComponent,FormsModule],
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

}
