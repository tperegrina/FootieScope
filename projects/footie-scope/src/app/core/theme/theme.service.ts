import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public themes: string[] = ['dark-theme', 'light-theme'] //tPeregrina: Find better data structure for this.
  public themeSubject: BehaviorSubject<string> = new BehaviorSubject('light-theme');
  constructor() { 
    // Initialize dark theme if selected by the user in browser preferences.
    const darkModePrefered = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark").matches;
    if (darkModePrefered) {
      this.themeSubject.next('dark-theme');
    }
    // Watch for changes in browser preferences.
    window.matchMedia("(prefers-color-scheme: dark").addListener( e => {
      this.themeSubject.next( e.matches ? 'dark-theme': 'light-theme');
    })
  }
}
