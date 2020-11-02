import { Component, OnInit } from '@angular/core';
import { FplApiService } from '../../core/http/fpl-api.service';
import { LeagueClassic } from '../../core/models/fpl-api/leagues';

@Component({
  selector: 'footie-sc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public league: LeagueClassic;
  
  constructor(private fplApi: FplApiService) { 
    this.league = {} as LeagueClassic;
  }

  ngOnInit(): void {
    let id: number = 278375;
    this.fplApi.getLeagueClassic(id)
      .subscribe((data: LeagueClassic) => this.league = data)
  }

}
