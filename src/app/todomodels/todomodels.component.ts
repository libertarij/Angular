import { Component, OnInit } from '@angular/core';
import {TodoModel} from "../todomodel";
import {TodomodelsService} from "../todomodels.service";

@Component({
  selector: 'app-todomodels',
  templateUrl: './todomodels.component.html',
  styleUrls: ['./todomodels.component.css']
})
export class TodomodelsComponent implements OnInit {
  todomodel: TodoModel;
  //   = {
  //   id: 1,
  //   name: 'Andrej',
  //   success: false
  // };

  // todomodelsService: TodomodelsService;

  constructor(private todomodelsService: TodomodelsService) {
    // this.todomodelsService = todomodelsService;
  }


  getTodo() {
    this.todomodelsService.getTodo()
      .subscribe((result: Array<TodoModel>) => {
        console.log('array: ', result);
        this.todomodel = result[0]
      });}

  ngOnInit() {
  }
}
