import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  mockData: any = [
    {
      id: '1',
      title: 'Pack lunch for the week',
      done: false,
      date: new Date()
    },
    {
      id: '2',
      title: 'Prepare for frontend interview',
      done: false,
      date: new Date()
    },
    {
      id: '3',
      title: 'Prepare for backend interview',
      done: false,
      date: new Date()
    },
    {
      id: '4',
      title: 'Build simple project in angular',
      done: false,
      date: new Date()
    },
  ];

//properties to show hide edit form, set updated value and id.

show: boolean = false;
value: string;
id: number;

  constructor() { }

//create function to create a new item.
create(item){
  this.mockData.push({
    id: Date.now(),
    title: item,
    done: false,
    date: new Date()
  });
}

//delete/remove function
remove(id){
  this.mockData = this.mockData.filter(item =>{
    if(item.id !== id){
      return item;
    }
  });
}

//this function does the same as renderEditForm in previous blog
edit(id, title){
  this.show = true;
  this.value = title;
  this.id = id;
}

  ngOnInit() {
  }

}
