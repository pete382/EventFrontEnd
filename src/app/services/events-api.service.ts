import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/favorites';
import { EventModel } from '../models/events';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsApiService {



  constructor(private http:HttpClient) { }

allEvents:Event[] = [];

url:string = "https://localhost:7277"
  
getAllEvents():Observable<EventModel[]>{
  return this.http.get<EventModel[]>(`${this.url}/api/Event`);
} 


AddEvent(newEvent:EventModel):Observable<EventModel>{
  
  return this.http.post<EventModel>(`${this.url}/api/Event`,newEvent)

}


deleteEvent(id:number):Observable<void>{

return this.http.delete<void>(`${this.url}/api/Event/${id}`) 

}

updateEvent(updatedEvent:EventModel):Observable<void>{
return this.http.put<void>(`${this.url}/api/Event/${updatedEvent.id}`, updatedEvent)

}



}
