import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})
export class ToDoListComponentComponent implements OnInit {

  @Input()
  task:string;
  tasks = ["Coffee", "Breakfast"];
  constructor() { }

  ngOnInit(): void {
  }

  add(task){
    this.tasks.push(task);
    return false;
  }

  remove(task){
    this.tasks.forEach((element, index) => {
      this.tasks.splice(index, 1);
    });
  }
}
