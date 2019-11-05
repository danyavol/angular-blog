import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ls = localStorage.getItem('auth') === 'true' ? true : false;
  private dataSource = new BehaviorSubject<any>(this.ls);
  isAdmin = this.dataSource.asObservable();

 
  constructor(private router: Router) { }

  loginUser(username, password) {
     if (username === environment.admin.username && password === environment.admin.password) {
       console.log('logged in');
       localStorage.setItem('auth', 'true');
       this.dataSource.next(true);
       this.router.navigate(['/']);
     } else {
      localStorage.setItem('auth', 'false');
       this.dataSource.next(false);
     }
  }

  logoutUser() {
    console.log('logged out');
    localStorage.setItem('auth', 'false');
    this.dataSource.next(false);
    this.router.navigate(['/']);
  }

  checkIfAdmin() {
    return this.isAdmin;
  }
}
