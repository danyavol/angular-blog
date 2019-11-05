import { Component } from '@angular/core';
import { AuthService } from '../app/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-blog';
  constructor(private authService: AuthService) {

  }
  
  logout() {
    this.authService.logoutUser();
  }
}
