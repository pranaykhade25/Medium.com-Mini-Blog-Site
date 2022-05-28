import { Component, OnInit } from '@angular/core';
import { Formclass } from '../formclass';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  blogtypes=["Food", "Travel"]
  ngForm=""
  userdata=new Formclass('Pranay Khade',9850459820,'pk@gmail.com','')
  
  constructor(){
    
  }
  selectValue=true
  // submitData(data:NgForm){
  //   console.log(this.userdata);
    submit(){
      //  console.log(schoolform)
        console.log(this.userdata)
  }
  selectValidate(value:any){
    if(value==='default'){
      this.selectValue=true;
    }
    else{
      this.selectValue=false;
    }
    }
 

  ngOnInit(): void {
  }

}

