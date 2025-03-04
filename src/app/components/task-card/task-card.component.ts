import { Component, inject, input, output, signal } from '@angular/core';
import { Task } from '../../models/Task.models';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-card',
  imports: [],
  template: ` <div class="flex justify-between items-center w-full gap-5">
    <span [class]="taskItem().completed ? 'line-through' : ''">{{
      taskItem().title
    }}</span>
    <span class="flex gap-2">
      <button
        class="p-2 bg-yellow-400 text-white shadow-md rounded-md"
        (click)="modify()"
      >
        Update
      </button>
      <button class="p-2 bg-red-500  shadow-md rounded-md" (click)="delete()">
        Delete
      </button>
      <button class="p-2 bg-green-400  shadow-md rounded-md" (click)="update()">
        @if(taskItem().completed){
        <p>Redo</p>
        }@else{
        <p>Done</p>
        }
      </button>
    </span>
  </div>`,
  styles: ``,
})
export class TaskCardComponent {
  taskItem = input.required<Task>();
  itemDeleted = output<string>();
  itemUpdated = output<string>();
  itemModified = output<string>();
  taskService = inject(TaskService);
  taskId: any;

  ngOnInit() {
    if (this.taskItem()) {
      this.taskId = this.taskItem().id?.toString() || '0';
    }
  }

  delete() {
    this.taskService.deleteTask(this.taskId).subscribe(() => {
      this.itemDeleted.emit(this.taskId);
    });
  }

  update() {
    this.taskItem().completed = !this.taskItem().completed;
    this.taskService.updateTask(this.taskItem(), this.taskId).subscribe(() => {
      this.itemUpdated.emit(this.taskId);
    });
  }
  modify() {
    this.itemModified.emit(this.taskId);
  }
}
