import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAdmin: boolean = false;
  private dataSource = new BehaviorSubject<any>(this.isAdmin);
  data = this.dataSource.asObservable();

 
  constructor(private router: Router) { }

  loginUser(username, password) {
     if (username === environment.admin.username && password === environment.admin.password) {
       this.isAdmin = true;
       console.log('logged in');
       this.dataSource.next(this.isAdmin);
       this.router.navigate(['/']);
     } else {
       this.isAdmin = false;
     }
  }

  logoutUser() {
    this.isAdmin = false;
    console.log('logged out');
    this.dataSource.next(this.isAdmin);
  }

  checkIfAdmin() {
    return this.isAdmin;
  }
}
