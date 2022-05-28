import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  c1:string='Write Your Blogs Now!!'
  c2:string='Happy Travelling'
  c3:string='Make Your Day Feel Fresh'
  src1="assets/c1.jpg"
  src2="assets/c2.png"
  src3="assets/c31.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
