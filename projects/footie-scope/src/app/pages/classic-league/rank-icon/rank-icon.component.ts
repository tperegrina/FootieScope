import { Component, OnInit, Input } from '@angular/core';

enum Rank {
  UP,
  DOWN,
  NO_CHANGE
}

@Component({
  selector: 'footie-sc-rank-icon',
  templateUrl: './rank-icon.component.html',
  styleUrls: ['./rank-icon.component.scss']
})
export class RankIconComponent implements OnInit {
  @Input('current') current: number = 0;
  @Input('previous') previous: number = 0;
  public eRank = Rank;

  constructor() {
  }

  ngOnInit(): void {
  }

  public isRankIncreased() {
    if (this.current == this.previous) {
      return Rank.NO_CHANGE;
    } else if (this.current - this.previous < 0 ) {
      return Rank.UP;
    } else {
      return Rank.DOWN;
    }
  }

}
