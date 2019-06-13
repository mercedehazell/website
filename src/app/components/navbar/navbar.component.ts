import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

navbarItems = ['You', 'Are', 'The', 'Best']
//  navbarItems =[];

  constructor() { }

  ngOnInit() {
    // for(let i=0; i<4; i++)
    // this.navbarItems.push('another item');
  }

}
