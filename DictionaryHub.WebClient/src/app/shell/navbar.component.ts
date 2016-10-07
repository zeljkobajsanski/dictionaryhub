import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  showUser: boolean = AuthService.accessToken != null && AuthService.accessToken != undefined;

  constructor() { }

  ngOnInit() {
  }

}
