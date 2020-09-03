import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { ILeague } from '../models/league';
import *  as  mockedLeagues from '../mocked-data/leagues.json';

@Injectable({
    providedIn: 'root'
})
export class LeagueService {
    private leagues: ILeague[];

    constructor() {
        this.leagues = (mockedLeagues as any).default;
    }

    getLeague(id: number): Observable<ILeague> {
        return of(this.leagues.find(l => l.id === id));
    }

    getLeagues(): Observable<ILeague[]> {
        return of(this.leagues);
    }
}