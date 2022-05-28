import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogger:any=[
    "Pranay","Prathamesh",
  ]
  Pranay=[{Blog:'Welcome to my Travel Blogs'}
]

Prathamesh=[{Blog:'Welcome to my Travel Blogs'}
]


  selectValue=true
  submit(){
    
      console.log(this.userdata)
  }
  userdata=new Schedule("",'');

  selectValidate(value:any){
  if(value==='default'){
    this.selectValue=true;
  }
  else{
    this.selectValue=false;
  }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
