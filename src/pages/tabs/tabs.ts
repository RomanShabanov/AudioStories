import { Component } from '@angular/core';


import { LibraryPage } from '../library/library';
import { SearchPage } from '../search/search';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = LibraryPage;
  tab2Root = SearchPage;
  tab3Root = SettingsPage;
  constructor() {

  }
}
