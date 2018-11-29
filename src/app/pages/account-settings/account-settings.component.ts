import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { debug } from 'util';
import { SettingsService } from '../../services/services.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _settings: SettingsService) { }

  ngOnInit() {
    this.setCheck();
  }

  changeTheme (theme: string, link: any) {
    this._settings.setTheme(theme);
    this.selectedItem(link);
  }

  selectedItem (link: any) {
    let selectors: any = document.getElementsByClassName('selector');
    for (let ref of selectors) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  setCheck() {
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._settings.settings.name;
    for (let ref of selectors) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
      }
    }
  }

}
