import { ToDoItem } from "./todo/todoitem.model";

export class Model{
    items:ToDoItem[];
    list:any;


    constructor(){
        this.items=[
            
        ];
        this.list={
            name:'Yapılacaklar Listesi',
            date:''
          }
    }
}
