import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAdmin: boolean = false;
  private dataSource = new BehaviorSubject<any>(this.isAdmin);
  data = this.dataSource.asObservable();

  

  constructor() { }

  loginUser(username, password) {
     if (username === environment.admin.username && password === environment.admin.password) {
       this.isAdmin = true;
       this.dataSource.next(this.isAdmin);
     } else {
       this.isAdmin = false;
     }
  }

  logoutUser() {
    this.isAdmin = false;
    this.dataSource.next(this.isAdmin);
  }

  checkIfAdmin() {
    return this.isAdmin;
  }
}
