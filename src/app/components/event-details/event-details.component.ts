import { Component, Input } from '@angular/core';
import { EventModel } from '../../models/events';
import { ActivatedRoute } from '@angular/router';
import { EventsApiService } from '../../services/events-api.service';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {
  constructor(private activatedRoute:ActivatedRoute, private _eventService:EventsApiService){};

  displayEvent:EventModel = {} as EventModel;

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      let id = Number(paramMap.get("id"));
      this._eventService.getById(id).subscribe((response)=>{
        this.displayEvent = response;
      })
    })
  }
}
