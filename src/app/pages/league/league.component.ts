import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ILeague } from 'src/app/models/league';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  league$: Observable<ILeague>;

  constructor(
    private route: ActivatedRoute,
    private leagueService: LeagueService) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id') || undefined;

    if (id) {
      this.league$ = this.leagueService.getLeague(id);
    } else {
      //TODO: handle error
    }
  }
}
