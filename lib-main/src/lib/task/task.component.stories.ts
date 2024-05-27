import { action } from '@storybook/addon-actions';
import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { TASK_STATE, TaskModel } from './models/task.model';
import { TaskComponent } from './task.component';

const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const meta: Meta<TaskComponent> = {
  component: TaskComponent,
  title: 'TaskComponent',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  render: (args: TaskComponent) => ({
    props: {
      ...args,
      onPinTask: () => actionsData.onPinTask,
      onArchiveTask: () => actionsData.onArchiveTask,
    },
    template: `<lib-gl-task ${argsToTemplate(args)}></lib-gl-task>`,
  }),
};
export default meta;
type Story = StoryObj<TaskComponent>;

const defaultTask: TaskModel = {
  id: '1',
  title: 'Test Task',
  state: TASK_STATE.INBOX,
  description: 'This is a test task',
};

export const Default: Story = {
  args: {
    task: defaultTask,
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...defaultTask,
      state: TASK_STATE.PINNED,
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...defaultTask,
      state: TASK_STATE.ARCHIVED,
    },
  },
};
