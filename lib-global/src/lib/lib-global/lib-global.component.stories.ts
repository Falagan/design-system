import type { Meta, StoryObj } from '@storybook/angular';
import { LibGlobalComponent } from './lib-global.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LibGlobalComponent> = {
  component: LibGlobalComponent,
  title: 'LibGlobalComponent',
};
export default meta;
type Story = StoryObj<LibGlobalComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/lib-global works!/gi)).toBeTruthy();
  },
};
