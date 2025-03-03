import { Component, inject, input, signal } from '@angular/core';
import { Task } from '../../models/Task.models';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-card',
  imports: [],
  template: ` <div class="flex justify-between items-center w-full gap-5">
    <span>{{ taskItem().title }}</span>
    <span class="flex gap-2">
      <button class="p-2 bg-red-500  shadow-md rounded-md" (click)="delete()">
        Delete
      </button>
      <button class="p-2 bg-green-400  shadow-md rounded-md">Done</button>
    </span>
  </div>`,
  styles: ``,
})
export class TaskCardComponent {
  taskItem = input.required<Task>();
  taskService = inject(TaskService);
  taskId: any = this.taskItem().id;

  delete() {
    this.taskService.deleteTask(this.taskId);
  }
  update() {}
}
