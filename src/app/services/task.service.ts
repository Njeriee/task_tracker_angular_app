import { Injectable } from '@angular/core';
// API calls
import { HttpClient } from '@angular/common/http';
// implementing observables
// the observable function is found in the rxjs file
import { Observable,of } from 'rxjs';
// importing mock tasks
import { TASKS } from '../mock-tasks';
// import interface that is used to create tasks
import { Task } from '../Tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http:HttpClient) { }

  // observables are used for asynchronous functions
  getTasks(): Observable<Task[]>{
        return this.http.get<Task[]>(this.apiUrl)
  }
}
