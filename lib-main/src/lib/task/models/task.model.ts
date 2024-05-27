export const TASK_STATE = {
  INBOX: 'TASK_INBOX',
  PINNED: 'TASK_PINNED',
  ARCHIVED: 'TASK_ARCHIVED',
} as const;

export type TaskState = typeof TASK_STATE[keyof typeof TASK_STATE];

export interface TaskModel {
  id: string;
  title: string;
  description: string;
  state: TaskState;
}
