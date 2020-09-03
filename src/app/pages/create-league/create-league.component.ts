import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateLeagueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Password Validator creation
  // Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{8,32})')
}
