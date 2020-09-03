import { Component, OnInit } from '@angular/core';

import { APP_NAME } from '../../models/constans';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = APP_NAME;
  }
}
