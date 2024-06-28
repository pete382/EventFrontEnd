import { Component, EventEmitter, Output, output } from '@angular/core';
import { EventModel } from '../../models/events';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {

  formEvent:EventModel = {} as EventModel;
  @Output() Submitted  = new EventEmitter<EventModel>();

  emitSubmitted(){
    let newEvent:EventModel = {...this.formEvent};
    console.log(newEvent);
    newEvent.id = 0;
    newEvent.eventTime+=":00";
    this.Submitted.emit(newEvent);
  }

}
