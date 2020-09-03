import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ILeague } from '../../models/league';
import { APP_NAME } from '../..//models/constans';
import { LeagueService } from '../../services/league.service';

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
