import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.authService.loginUser(this.username.value, this.password.value);
  }

}
