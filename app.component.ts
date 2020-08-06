import { detailsservice } from './../../../login/src/app/signup.service';
import { Component } from '@angular/core';
import {todo} from './todo';
import { PatternValidator, Validators,FormBuilder } from '@angular/forms';
import { NONE_TYPE } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'form';
  date=new Date()
  name:string;
  phone:number;
  list:todo[];   
  email: string;
  
 

  ngOnInit(){
    this.list=[];
    this.name='';
    this.phone=null;
  }
  addvalue(){
    if((this.phone && this.email && this.name)!=null){
      const newitem:todo={
        id:Date.now(),
        value:this.stuname,
        isDone:false
  
      }
      this.list.push(newitem) 
    }
    if(this.name!==''){
     
    
      const newitem:todo={
        id:Date.now(),
        value:this.name,
        isDone:false
      }
      this.list.push(newitem)   
    }
    
    this.name='';
    this.phone=null;
    this.email='';
   

    
  }
  

deleteItem(id:number)
{
  this.list = this.list.filter(item => item.id!==id);
}
}
  
