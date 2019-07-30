import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private store: Store<fromApp.AppState>) { }
  ngOnInit(): void {
    //this.authService.autoLogin();
    this.store.dispatch(new AuthActions.AppRefreshStart());
  }
}
