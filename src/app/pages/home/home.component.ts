import { Component, OnInit } from '@angular/core';

import { ILeague } from 'src/app/models/league';
import { APP_NAME } from 'src/app/models/constans';
import { LeagueService } from 'src/app/services/league.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string;
  leagues$: Observable<ILeague[]>;

  constructor(
    private leagueService: LeagueService) {
  }

  ngOnInit(): void {
    this.title = APP_NAME;
    this.leagues$ = this.leagueService.getLeagues();
  }

}
