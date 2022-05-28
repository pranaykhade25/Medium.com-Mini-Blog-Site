import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  a:String="1";
  a2:String="Beginner";
  a3:number=45;
  a4:string="3 Months"
 
  b:string="2"
  b2:string="Intermediate"
  b3:string="$100";
  b4:string="6 Months"
 
  c:string="3";
  c2:string="Expert";
  c3:string="500$";
  c4:string="12 Months"

  constructor() { }

  ngOnInit(): void {
  }

}
