import { Component, OnInit } from '@angular/core';
import { FplApiService } from '../../core/http/fpl-api.service';
import { LeagueClassic, StandingResult } from '../../core/models/fpl-api/leagues';

enum Rank {
  UP,
  DOWN,
  NO_CHANGE
}
@Component({
  selector: 'footie-sc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public league: LeagueClassic;
  public standings: StandingResult[] = []
  public eRank = Rank;

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

  public isRankIncreased(current: number, previous: number) {
    console.log(current, previous);
    if (current == previous) {
      return Rank.NO_CHANGE;
    } else if ( current - previous < 0 ) {
      return Rank.UP;
    } else {
      return Rank.DOWN;
    }
  }

}

