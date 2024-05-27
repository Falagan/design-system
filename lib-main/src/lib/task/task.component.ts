import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TASK_STATE, TaskModel } from './models/task.model';

@Component({
  selector: 'lib-gl-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * TaskComponent is responsible for displaying a task and emitting events
 * for pinning and archiving the task.
 */
export class TaskComponent {
  /** Input property to receive task data */
  @Input() task: TaskModel | undefined;

  /** Output event to emit the ID of a task that needs to be pinned */
  @Output() pinTask = new EventEmitter<string>();

  /** Output event to emit the ID of a task that needs to be archived */
  @Output() archiveTask = new EventEmitter<string>();

  /** Public property to access task states */
  public TASK_STATE = TASK_STATE;

  /**
   * Emits an event to archive a task.
   * @param id The ID of the task to be archived.
   */
  public onArchiveTask(id: string) {
    this.archiveTask.emit(id);
  }

  /**
   * Emits an event to pin a task.
   * @param id The ID of the task to be pinned.
   */
  public onPinTask(id: string) {
    this.pinTask.emit(id);
  }
}
