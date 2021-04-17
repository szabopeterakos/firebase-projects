import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _dark = new BehaviorSubject<boolean>(true);
  isDarkTheme = this._dark.asObservable();
  setToDark(isDark: boolean) {
    this._dark.next(isDark);
  }
  constructor() {}
}
