import { Component, EventEmitter, Output, output } from '@angular/core';
import { EventModel } from '../../models/events';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [FormsModule, LoginComponent],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
  constructor(private socialAuthServiceConfig: SocialAuthService) { }
  user:SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  

  formEvent:EventModel = {} as EventModel;
  @Output() Submitted  = new EventEmitter<EventModel>();

  ngOnInit() {
    //authState is a custom observable that will run again any time changes are noticed.
    this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
      this.user = userResponse;
      //if login fails, it will return null.
      this.loggedIn = (userResponse != null);
      console.log(this.user);
    });
  }

  emitSubmitted(){
    let newEvent:EventModel = {...this.formEvent};
    console.log(newEvent);
    newEvent.id = 0;
    newEvent.eventTime+=":00";
    newEvent.userid = this.user.id;
    newEvent.username = this.user.name;
    this.Submitted.emit(newEvent);
  }

}
