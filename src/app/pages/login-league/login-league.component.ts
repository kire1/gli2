import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-league',
  templateUrl: './login-league.component.html',
  styleUrls: ['./login-league.component.scss']
})
export class LoginLeagueComponent implements OnInit {
  minPWLength: 8
  maxPWLength: 32;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }
}
