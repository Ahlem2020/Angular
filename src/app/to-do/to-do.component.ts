import { Component, OnInit } from '@angular/core';
import { CalculeService } from '../calcule.service';
import { ToDo } from '../Model/to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todoList :ToDo[] 
  n : number;

  constructor( private calculeService : CalculeService) { }

  getStat(){
    this.n = this.calculeService.getStat(this.todoList , "completed" , true)

  }

  ngOnInit(): void {
    this.todoList=[
      {id: 1 , title : "to do 1 ", completed : true},
      {id: 2 , title : "to do 2 ", completed : true},
      {id: 3 , title : "to do 3 ", completed : false},
      {id: 4 , title : "to do 4 ", completed : false},
      {id: 5 , title : "to do 5 ", completed : true},
    ];
  }

}
