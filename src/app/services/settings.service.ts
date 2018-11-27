import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: SettingsTheme = {
    url: 'assets/css/colors/default-dark.css',
    name: 'default-dark',
  };

  constructor(@Inject(DOCUMENT) private _document, ) {
    this.loadSettings();
  }

  saveSettings () {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
    this.setTheme(this.settings.name);
  }

  setTheme (theme: string) {
    let url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href',  url);

    this.settings.name = theme;
    this.settings.url = url;
    this.saveSettings();
  }
}

interface SettingsTheme {
  url: string;
  name: string;
}
