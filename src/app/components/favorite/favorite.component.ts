import { Component } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { FavoriteModel } from '../../models/favorites';
import { EventModel } from '../../models/events';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent {
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;

  constructor(
    private _favoriteService: FavoriteService,
    private socialAuthServiceConfig: SocialAuthService
  ) {}

  allFavorites: FavoriteModel[] = [];
  allFavoriteEvent: EventModel[] = [];

  getFavoritesById(id: string) {
    this._favoriteService.getAll(id).subscribe((response: FavoriteModel[]) => {
      this.allFavorites = response;
    });
  }

  deleteFavorite(f: FavoriteModel, id: string) {
    this._favoriteService.deleteFavorite(f.id).subscribe((response: void) => {
      this.getFavoritesById(id);
    });
  }

  ngOnInit() {
    //authState is a custom observable that will run again any time changes are noticed.
    this.socialAuthServiceConfig.authState.subscribe(
      (userResponse: SocialUser) => {
        this.user = userResponse;
        //if login fails, it will return null.
        this.loggedIn = userResponse != null;

        this.getFavoritesById(this.user.id);
      }
    );
  }
}
