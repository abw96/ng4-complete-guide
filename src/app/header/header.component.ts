import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed : boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }
}