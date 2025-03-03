import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task.models';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http = inject(HttpClient);
  baseUrl = `http://localhost:8080/api/task/`;

  getTasks(userId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}${userId}`);
  }

  addTask(task: Task, userId: string): Observable<Task> {
    let addTaskUrl = `${this.baseUrl}${userId}`;
    return this.http.post<Task>(addTaskUrl, task);
  }

  deleteTask(taskId: string) {
    let deleteTaskUrl = `${this.baseUrl}${taskId}`;
    return this.http.delete(deleteTaskUrl).subscribe();
  }
}
