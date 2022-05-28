import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  src = 'assets/logo.png';
  date=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
