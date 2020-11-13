import { Component, HostBinding } from '@angular/core';
import { ThemeService } from './core/theme/theme.service';

@Component({
  selector: 'footie-sc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FootieScope';
  @HostBinding('class') public themeClass: string = '';

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.themeService.themeSubject.subscribe((theme: string) => {
      this.themeClass = theme;
    });
    
  }
}
