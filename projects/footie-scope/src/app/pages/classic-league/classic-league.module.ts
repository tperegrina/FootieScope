import { NgModule } from '@angular/core';
import { ClassicLeagueRoutingModule } from './classic-league-routing.module';
import { ClassicLeagueComponent } from './classic-league.component';
import { SharedModule } from '../../shared/shared.module';
import { RankIconComponent } from './rank-icon/rank-icon.component';

@NgModule({
  declarations: [ClassicLeagueComponent, RankIconComponent],
  imports: [
    SharedModule,
    ClassicLeagueRoutingModule,
  ]
})
export class ClassicLeagueModule { }
