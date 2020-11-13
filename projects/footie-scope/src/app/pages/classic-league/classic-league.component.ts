import { Component, OnInit } from '@angular/core';
import { FplApiService } from '../../core/http/fpl-api.service';
import { LeagueClassic, StandingResult } from '../../core/models/fpl-api/leagues';

@Component({
  selector: 'footie-sc-classic-league',
  templateUrl: './classic-league.component.html',
  styleUrls: ['./classic-league.component.scss']
})
export class ClassicLeagueComponent implements OnInit {
  public league: LeagueClassic;
  public standings: StandingResult[] = []

  constructor(private fplApi: FplApiService) { 
    this.league = {} as LeagueClassic;
  }

  ngOnInit(): void {
    let id: number = 278375;
    this.fplApi.getLeagueClassic(id)
      .subscribe((data: LeagueClassic) => {
        this.league = data;
        this.standings = data.standings.results;
      })
    }

}

