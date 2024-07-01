import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/favorites';
import { EventModel } from '../models/events';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsApiService {
  constructor(private http: HttpClient) {}

  allEvents: Event[] = [];

  url: string = 'https://localhost:7277';

  getAllEvents(type?: string, event_name?: string): Observable<EventModel[]> {
    if (type != undefined && event_name != undefined) {
      return this.http.get<EventModel[]>(
        `${this.url}/api/Event?type=${type}&eventname=${event_name}`
      );
    } else if (type != undefined) {
      return this.http.get<EventModel[]>(`${this.url}/api/Event?type=${type}`);
    } else if (event_name != undefined) {
      return this.http.get<EventModel[]>(
        `${this.url}/api/Event?eventname=${event_name}`
      );
    } else return this.http.get<EventModel[]>(`${this.url}/api/Event`);
  }

  getById(id: number): Observable<EventModel> {
    return this.http.get<EventModel>(`${this.url}/api/Event/${id}`);
  }

  AddEvent(newEvent: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(`${this.url}/api/Event`, newEvent);
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/api/Event/${id}`);
  }

  updateEvent(updatedEvent: EventModel): Observable<void> {
    return this.http.put<void>(
      `${this.url}/api/Event/${updatedEvent.id}`,
      updatedEvent
    );
  }
}
