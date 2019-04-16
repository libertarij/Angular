import { Injectable } from '@angular/core';
import {TodoModel} from "./todomodel";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodomodelsService {

  constructor(private http: HttpClient) { }
  thtml = 'http://localhost:8080/todos/';

  getTodo(): Observable<Array<TodoModel>> {

    return this.http.get<Array<TodoModel>>(this.thtml);


    // const todomodel: TodoModel =
    //   {
    //   id: 1,
    //   name: 'Andrej',
    //   success: false
    // };
    // return todomodel;
  }
}
