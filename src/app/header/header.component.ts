import { Component, OnInit } from '@angular/core';
import { Globals } from '../Globals';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navmenu : boolean = false;
  
  constructor(public globals : Globals) { }

  ngOnInit(): void {
  }

  active(){
    this.navmenu = !this.navmenu;
   }

}
