import { Component, OnInit } from '@angular/core';
import { User } from '../database.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  user: User = {
    displayLanguage: 'Magyar',
    displayName: 'Tony Stark',
    guests: 0,
    id: 40498,
    isAdmin: true,
    status: 'tentative'
  }

  plusMember = '+ 2 member with me.';
  hint = 'Need more player ,I guess...'

  constructor() { }

  ngOnInit() {
  }

}
