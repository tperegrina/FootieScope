import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LeagueClassic } from '../models/fpl-api/leagues'
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FplApiService {
  private url: string= 'http://fantasy.premierleague.com/api/'
  constructor(private http: HttpClient) { }

  public getLeagueClassic(leagueId: string): Observable<LeagueClassic> {
    let urlPrefix: string = 'leagues-classic/'
    let urlSuffix: string = '/standings/'

    return this.http.get<LeagueClassic>(this.url + urlPrefix + leagueId + urlSuffix)
  }
}
