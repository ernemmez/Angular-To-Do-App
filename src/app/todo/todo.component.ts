import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { ToDoItem } from './todoitem.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
    
  showall:boolean=true;
  
  constructor() { }

  model=new Model();

  addItem(value:string){
    if(value!=='')
    {
    this.model.items.push({name:value,status:false})
    }
    
  }
  okey(){
    return this.model.items.filter(i => !i.status).length;
  }

  getItems(){
    if(this.showall)
    {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.status)

     }
 

}
