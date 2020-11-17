import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  private id: string = '';

  constructor(private fplApi: FplApiService, public route: ActivatedRoute) { 
    this.league = {} as LeagueClassic;
  }

  ngOnInit(): void {
    this.id  = this.route.snapshot.paramMap.get('leagueId') || '';

    if(this.id !== '') {
      this.fplApi.getLeagueClassic(this.id)
      .subscribe((data: LeagueClassic) => {
        this.league = data;
        this.standings = data.standings.results;
      })
    }
  }
}

