import { Component } from '@angular/core';
import { EventsComponent } from './components/events/events.component';
import { RouterOutlet } from '@angular/router';
import { SocialAuthService, SocialUser,GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EventsComponent,GoogleSigninButtonModule,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EventFrontend';
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;

  constructor(private socialAuthServiceConfig:SocialAuthService){}

  ngOnInit() {
    //authState is a custom observable that will run again any time changes are noticed.
    this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
      this.user = userResponse;
      //if login fails, it will return null.
      this.loggedIn = (userResponse != null);
    });
  }

  signOut(): void {
    this.socialAuthServiceConfig.signOut();
  }

}
