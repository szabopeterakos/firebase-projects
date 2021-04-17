import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'themeswitcher';
  isDarkTheme: Observable<boolean>;
  constructor(private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleTheme(checked: boolean) {
    this.themeService.setToDark(checked);
  }
}
